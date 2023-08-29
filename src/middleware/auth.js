module.exports = {
  isAdmin: (req, res, next) => {
    if(req.APP_DATA.tokenDecode.userLevel === 0) {
      next();
    }
    else {
      res.json({
        message: "Halaman ini diakses oleh admin",
      });
    }
  },

  isCostumer: (req, res, next) => {
    if (req.APP_DATA.tokenDecode.userLevel === 1) {
      next();
    }
    else {
      res.json({
        message: "Halaman ini diakses oleh costumer"
      });
    }
  }
};