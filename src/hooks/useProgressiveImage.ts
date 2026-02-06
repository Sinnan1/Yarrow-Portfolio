import { useState, useEffect } from 'react';

interface ProgressiveImageState {
  src: string;
  loading: boolean;
  error: boolean;
}

/**
 * Hook for progressive image loading with blur-up effect
 * @param src - High quality image source
 * @param placeholder - Low quality/blur placeholder (optional)
 * @returns Current image src and loading state
 */
export const useProgressiveImage = (
  src: string,
  placeholder?: string
): ProgressiveImageState => {
  const [imgSrc, setImgSrc] = useState(placeholder || src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Create image object to preload
    const img = new Image();
    
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
    
    img.src = src;
    
    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return {
    src: imgSrc,
    loading,
    error,
  };
};
