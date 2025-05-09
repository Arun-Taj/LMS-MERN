// import multer from 'multer';

// const storage = multer.diskStorage({});

// const upload = multer({ storage });

// export default upload;


// config/multer.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// ensure the uploads folder exists
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename(req, file, cb) {
    // e.g. 1618033988749-my-image.png
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

export default upload;
