const multer = require("multer");
const path = require("path");

// simpan file
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public");
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `${Date.now()}${ext}`;
      cb(null, fileName);
    }
  }),

  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext == ".png" || ext == ".jpg" || ext == ".jpeg") {
      cb(null, true);
    } else {
      const error = {
        // message: "file must be .PNG, .JPG OR .JPEG"
        message: "format file harus .png, .jpg atau .jpeg"
      };
      cb(error, false);
    }    
  },
  limits: { fileSize: 1024*1024*2 }
});

const upload = (req, res, next) => {
  const multerSingle = multerUpload.single("image");
  multerSingle(req, res, (err) => {
    if (err) {
      res.json({
        message: err.message
      });
    } else {
      next();
    }
  });
};

module.exports = upload;