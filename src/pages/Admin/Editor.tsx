import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/cms';

const Editor = () => {
    const { page } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/${page}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load content');
                setLoading(false);
            });
    }, [page]);

    const handleChange = (path: string[], value: any) => {
        setContent((prev: any) => {
            const newState = JSON.parse(JSON.stringify(prev));
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newState;
        });
    };

    const handleSave = async () => {
        try {
            const res = await fetch(`${API_URL}/${page}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content),
            });
            if (!res.ok) throw new Error();
            alert('Saved successfully!');
        } catch {
            alert('Failed to save');
        }
    };

    const getImageGuideline = (path: string[]): string => {
        const pathStr = path.join('.');
        if (pathStr.includes('about.image1')) return 'Recommended: 600x800 (Portrait 3:4)';
        if (pathStr.includes('about.image2')) return 'Recommended: 800x500 (Landscape 16:10)';
        if (path.includes('featuredWeddings') && path.includes('image')) return 'Recommended: 600x800 (Portrait 3:4)';
        if (path.includes('films') && path.includes('image')) return 'Recommended: 1280x720 (Landscape 16:9)';
        if (path.includes('weddingStories') && path.includes('image')) return 'Recommended: 600x800 (Portrait 3:4)';
        return 'Recommended: High resolution';
    };

    const renderField = (key: string, value: any, path: string[]) => {
        if (typeof value === 'string') {
            const isLongText = value.length > 50;
            const isImage = key.toLowerCase().includes('image') ||
                key.toLowerCase().includes('src') ||
                key.toLowerCase().includes('url') ||
                path.some(p => p.toLowerCase().includes('image')); // Check path for array items

            return (
                <div key={path.join('.')} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-700 capitalize">{key}</label>
                        {isImage && (
                            <span className="text-xs text-gold/80 font-medium bg-gold/10 px-2 py-1 rounded">
                                {getImageGuideline(path)}
                            </span>
                        )}
                    </div>

                    {isImage ? (
                        <div className="flex items-start gap-4">
                            {value && (
                                <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 shrink-0">
                                    <img src={value} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none mb-2 text-sm"
                                    value={value}
                                    onChange={(e) => handleChange(path, e.target.value)}
                                    placeholder="Image URL"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            try {
                                                const { cmsApi } = await import('../../api/cms');
                                                const res = await cmsApi.uploadImage(file);
                                                if (res && res.url) {
                                                    handleChange(path, res.url);
                                                }
                                            } catch (err) {
                                                alert('Failed to upload image');
                                            }
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-gold/10 file:text-gold
                    hover:file:bg-gold/20
                  "
                                />
                            </div>
                        </div>
                    ) : isLongText ? (
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none min-h-[100px]"
                            value={value}
                            onChange={(e) => handleChange(path, e.target.value)}
                        />
                    ) : (
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded focus:border-gold outline-none"
                            value={value}
                            onChange={(e) => handleChange(path, e.target.value)}
                        />
                    )}

                </div>
            );
        }

        if (Array.isArray(value)) {
            return (
                <div key={path.join('.')} className="mb-6 border-l-2 border-gray-200 pl-4 py-2">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800 capitalize">{key} List ({value.length})</h3>
                        <button
                            onClick={() => {
                                const newValue = [...value, typeof value[0] === 'object' ? {} : ''];
                                handleChange(path, newValue);
                            }}
                            className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-gray-700 transition-colors"
                        >
                            + Add Item
                        </button>
                    </div>

                    <div className="space-y-4">
                        {value.map((item, index) => (
                            <div key={index} className="relative group bg-gray-50/50 p-4 rounded border border-gray-100 hover:border-gray-300 transition-colors">
                                <button
                                    onClick={() => {
                                        if (confirm('Remove this item?')) {
                                            const newValue = value.filter((_, i) => i !== index);
                                            handleChange(path, newValue);
                                        }
                                    }}
                                    className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                                    title="Remove Item"
                                >
                                    &times;
                                </button>

                                <div className="pr-6">
                                    {typeof item === 'object' ? (
                                        Object.keys(item).map((subKey) =>
                                            renderField(subKey, item[subKey], [...path, index.toString(), subKey])
                                        )
                                    ) : (
                                        renderField(`Item ${index + 1}`, item, [...path, index.toString()])
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {value.length === 0 && (
                        <div className="text-sm text-gray-400 italic">No items in this list.</div>
                    )}
                </div>
            );
        }

        if (typeof value === 'object' && value !== null) {
            return (
                <div key={path.join('.')} className="mb-6 border-l-2 border-gold pl-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 capitalize">{key} Section</h3>
                    {Object.keys(value).map((subKey) =>
                        renderField(subKey, value[subKey], [...path, subKey])
                    )}
                </div>
            );
        }

        return null;
    };

    if (loading) return <div className="p-8">Loading...</div>;
    if (error) return <div className="p-8 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 pb-32">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold capitalize">Editing: {page}</h1>
                    <button onClick={() => navigate('/admin')} className="text-gray-500 hover:text-black">Back to Dashboard</button>
                </div>

                {Object.keys(content).map((key) =>
                    renderField(key, content[key], [key])
                )}

                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-end px-8 md:px-32">
                    <button
                        onClick={handleSave}
                        className="bg-gold text-white px-8 py-3 rounded hover:bg-gold/90 transition-colors font-medium shadow-lg"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Editor;
