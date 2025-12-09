import express from "express";
import cloudinary from "cloudinary";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.get("/api/images", async (req, res) => {
  try {
    const folder = req.query.folder;

    if (!folder) {
      return res.status(400).json({ error: "Please provide ?folder=your/folder" });
    }

    const response = await cloudinary.v2.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "asc")
      .max_results(200)
      .execute();

    // Filter only needed fields
    const filtered = response.resources.map(img => ({
      public_id: img.public_id,
      secure_url: img.secure_url,
      folder: img.asset_folder,
      width: img.width,
      height: img.height,
      format: img.format,
    }));

    res.json({
      count: filtered.length,
      images: filtered,
    });

  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    res.status(500).json({ error: "Error fetching images from Cloudinary" });
  }
});

// Server start
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
