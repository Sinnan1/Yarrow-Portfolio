const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cmsRoutes = require('./src/routes/cms.routes');
const uploadRoutes = require('./src/routes/upload.routes');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/content', cmsRoutes);
app.use('/api/upload', uploadRoutes);

// Statics
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`CMS Server running on http://localhost:${PORT}`);
});
