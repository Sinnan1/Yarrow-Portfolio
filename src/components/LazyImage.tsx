import React from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { useProgressiveImage } from '../hooks/useProgressiveImage';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Lazy loading image component with progressive blur-up effect
 * Combines Intersection Observer lazy loading with progressive image loading
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  rootMargin = '200px',
  threshold = 0.01,
  className = '',
  ...props
}) => {
  const [ref, isVisible] = useLazyLoad({ rootMargin, threshold });
  
  // Only start loading when visible
  const { src: imgSrc, loading } = useProgressiveImage(
    isVisible ? src : placeholder || '',
    placeholder
  );

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loading ? 'blur-sm scale-105' : 'blur-0 scale-100'
        }`}
        loading="lazy"
        {...props}
      />
      
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-cream/20 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
