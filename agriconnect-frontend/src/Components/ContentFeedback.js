// ContentFeed.js
import React from 'react';

const contentList = [
    { id: 1, title: 'Sustainable Farming Practices', image: 'path/to/image1.jpg', summary: 'Learn about sustainable methods...', category: 'Sustainability' },
    { id: 2, title: 'Modern Equipment for Farming', image: 'path/to/image2.jpg', summary: 'Explore the latest technology...', category: 'Technology' },
    // Add more content
];

const ContentFeed = () => {
    return (
        <div>
            <h1>Explore Farming Content</h1>
            <input type="text" placeholder="Search Content..." />
            <div>
                <button>All</button>
                <button>Sustainability</button>
                <button>Technology</button>
                {/* Add more filter categories */}
            </div>
            <div className="content-feed">
                {contentList.map(content => (
                    <div key={content.id} className="content-card">
                        <img src={content.image} alt={content.title} />
                        <h2>{content.title}</h2>
                        <p>{content.summary}</p>
                        <button>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentFeed;
