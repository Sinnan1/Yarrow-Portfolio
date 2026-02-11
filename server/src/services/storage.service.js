const fs = require('fs').promises;
const path = require('path');

// Path to the JSON data files
const DATA_DIR = path.resolve(__dirname, '../../../src/data/content');

const StorageService = {
    /**
     * Reads content from a JSON file
     * @param {string} page - The name of the page (e.g., 'home')
     * @returns {Promise<object>} - The JSON content
     */
    async getContent(page) {
        try {
            const filePath = path.join(DATA_DIR, `${page}.json`);
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                throw new Error(`Content for page '${page}' not found.`);
            }
            throw error;
        }
    },

    /**
     * Writes content to a JSON file
     * @param {string} page - The name of the page
     * @param {object} content - The content to write
     * @returns {Promise<void>}
     */
    async saveContent(page, content) {
        try {
            // Ensure directory exists
            await fs.mkdir(DATA_DIR, { recursive: true });

            const filePath = path.join(DATA_DIR, `${page}.json`);
            await fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf8');
        } catch (error) {
            throw error;
        }
    }
};

module.exports = StorageService;
