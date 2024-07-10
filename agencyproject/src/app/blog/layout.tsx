import React from 'react';

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div>
            <h2>This is Blog Layouts</h2>
            {children}
        </div>
    );
}

export default BlogLayout;
