const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://unsplash.com/photos/traffic-filled-highways-crisscross-a-city-at-golden-hour-72CrKMqbwkM', name: 'hero1.jpg' },
  { url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=100&w=2000&auto=format&fit=crop', name: 'hero2.jpg' },
  { url: 'https://images.unsplash.com/photo-1517409207198-6bb755e378bc?q=100&w=2000&auto=format&fit=crop', name: 'hero3.jpg' },
  { url: 'https://images.unsplash.com/photo-1605335919426-5b4d990479da?q=100&w=2000&auto=format&fit=crop', name: 'hero4.jpg' },
  { url: 'https://images.unsplash.com/photo-1547471080-7bc2caa7f3a6?q=100&w=2000&auto=format&fit=crop', name: 'hero5.jpg' },
];

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }

      const fileStream = fs.createWriteStream(filename);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filename, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    try {
      await downloadImage(img.url, path.join(dir, img.name));
      console.log(`Downloaded ${img.name}`);
    } catch (e) {
      console.error(`Error downloading ${img.name}:`, e);
    }
  }
}

run();
