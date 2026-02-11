export const API_URL = 'http://localhost:3001/api/content';

export const cmsApi = {
    async getContent(page: string) {
        try {
            const response = await fetch(`${API_URL}/${page}`);
            if (!response.ok) throw new Error('Failed to fetch content');
            return await response.json();
        } catch (error) {
            console.error('Error fetching content:', error);
            return null;
        }
    },

    async saveContent(page: string, content: any) {
        try {
            const response = await fetch(`${API_URL}/${page}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content),
            });
            if (!response.ok) throw new Error('Failed to save content');
            return await response.json();
        } catch (error) {
            console.error('Error saving content:', error);
            throw error;
        }
    },

    async uploadImage(file: File) {
        try {
            const formData = new FormData();
            formData.append('image', file);

            // Replace /content with /upload in the URL
            const uploadUrl = API_URL.replace('/content', '/upload');

            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to upload image');
            return await response.json(); // returns { url: string }
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    }
};
