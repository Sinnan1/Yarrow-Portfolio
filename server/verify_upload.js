const fs = require('fs');
const path = require('path');

// Node 18+ has built-in fetch and FormData
// If in older node, we might fail, but let's try.
// Assuming the user has a recent node version given React project.

async function testUpload() {
    try {
        console.log('Creating dummy image...');
        const dummyPath = path.join(__dirname, 'test-image.jpg');
        fs.writeFileSync(dummyPath, 'fake image content');

        const file = new Blob(['fake image content'], { type: 'image/jpeg' });
        const formData = new FormData();
        formData.append('image', file, 'test-image.jpg');

        console.log('Uploading to http://localhost:3001/api/upload...');
        const res = await fetch('http://localhost:3001/api/upload', {
            method: 'POST',
            body: formData
        });

        console.log('Status:', res.status);
        const text = await res.text();
        console.log('Response:', text);

        fs.unlinkSync(dummyPath); // cleanup

    } catch (err) {
        console.error('Test Failed:', err);
    }
}

testUpload();
