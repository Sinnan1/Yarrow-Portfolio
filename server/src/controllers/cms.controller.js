const StorageService = require('../services/storage.service');

const CMSController = {
    /**
     * Get content for a specific page
     */
    async getContent(req, res) {
        try {
            const { page } = req.params;
            const content = await StorageService.getContent(page);
            res.json(content);
        } catch (error) {
            console.error(`Error getting content for ${req.params.page}:`, error);
            res.status(500).json({ error: error.message });
        }
    },

    /**
     * Save content for a specific page
     */
    async saveContent(req, res) {
        try {
            const { page } = req.params;
            const content = req.body;

            if (!content) {
                return res.status(400).json({ error: 'No content provided' });
            }

            await StorageService.saveContent(page, content);
            res.json({ success: true, message: 'Content saved successfully' });
        } catch (error) {
            console.error(`Error saving content for ${req.params.page}:`, error);
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = CMSController;
