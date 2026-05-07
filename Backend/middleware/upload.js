const multer = require('multer');
const path = require('path');

// Configurazione storage in memoria (per Cloudinary)
const storage = multer.memoryStorage();

// Filtro per accettare solo immagini
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Solo file immagine sono permessi (jpeg, jpg, png, gif, webp)'));
  }
};

// Upload singola immagine
const uploadSingle = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  },
  fileFilter
}).single('immagine');

// Upload multiple immagini
const uploadMultiple = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max per file
  },
  fileFilter
}).array('immagini', 10); // max 10 immagini

// Middleware con error handling
exports.uploadSingleImage = (req, res, next) => {
  uploadSingle(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        success: false,
        message: `Errore upload: ${err.message}`
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
    next();
  });
};

exports.uploadMultipleImages = (req, res, next) => {
  uploadMultiple(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        success: false,
        message: `Errore upload: ${err.message}`
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
    next();
  });
};
