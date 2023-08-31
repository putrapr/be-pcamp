const cloudinary= require("cloudinary").v2;
          
cloudinary.config({ 
  cloud_name: "dzpf9unc5", 
  api_key: "474654279687354", 
  api_secret: "ffOWZzG0QhBADfC9xXMt6j75fhY" 
});

module.exports = cloudinary;