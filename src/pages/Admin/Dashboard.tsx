import { Link } from 'react-router-dom';

const Dashboard = () => {
    const pages = [
        { id: 'home', name: 'Home Page' },
        { id: 'about', name: 'About Page' },
        { id: 'films', name: 'Films Page' },
        // Add more pages here as we extract them
        { id: 'photography', name: 'Photography Page' },
        { id: 'galleries', name: 'Individual Galleries' },
        { id: 'contact', name: 'Contact Page' },
        { id: 'faq', name: 'FAQ Page' },
    ];
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">CMS Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pages.map((page) => (
                        <Link
                            key={page.id}
                            to={`/admin/edit/${page.id}`}
                            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-gold">{page.name}</h2>
                            <p className="text-gray-600">Edit content for the {page.name} page.</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
