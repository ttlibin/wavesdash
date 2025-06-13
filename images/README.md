# Game Cover Images

This folder contains the cover images for all games on the WAVE⚡DASH platform.

## 📸 **Image Requirements**

### File Format & Quality
- **Supported formats**: JPG, PNG (recommended: JPG for smaller file size)
- **Dimensions**: 300x200 pixels (3:2 aspect ratio)
- **File size**: Maximum 500KB per image
- **Quality**: High resolution, clear and vibrant

### Naming Convention
Use lowercase filenames with hyphens for spaces:
- ✅ `subway-surfers.jpg`
- ✅ `among-us.jpg` 
- ✅ `geometry-dash.jpg`
- ❌ `Subway Surfers.JPG`
- ❌ `among_us.png`

## 🎯 **Adding New Game Images**

### Step 1: Prepare Your Image
1. Resize to exactly **300x200 pixels**
2. Optimize for web (compress to reduce file size)
3. Ensure the image clearly represents the game

### Step 2: Save to This Folder
1. Save the image file in this `/images/` directory
2. Use the correct naming convention (lowercase, hyphens)
3. Keep file extension as `.jpg` or `.png`

### Step 3: Update Game Data
In the `script.js` file, update the game object:

```javascript
{
    id: 13,
    title: "Your Game Title",
    description: "Game description here...",
    category: "action", // or appropriate category
    image: "images/your-game-title.jpg", // ← Update this path
    url: "https://your-game-url.com",
    tags: ["tag1", "tag2", "tag3"],
    rating: 4.5
}
```

## 🖼️ **Image Design Tips**

### Visual Guidelines
- Use **bright, colorful** images that catch attention
- Show **key characters or gameplay elements**
- Avoid cluttered compositions
- Ensure text on the image is **readable**

### Content Requirements
- Image should represent the actual game
- No inappropriate or violent content for general audience
- Family-friendly visuals
- Clear, professional appearance

## 📁 **Current Images**

| Filename | Game | Status |
|----------|------|--------|
| `placeholder.jpg` | Default fallback | ✅ Ready |
| `subway-surfers.jpg` | Subway Surfers | 📝 Add your image |
| `among-us.jpg` | Among Us Online | 📝 Add your image |
| `geometry-dash.jpg` | Geometry Dash | 📝 Add your image |
| `minecraft.jpg` | Minecraft Classic | 📝 Add your image |
| `temple-run.jpg` | Temple Run 2 | 📝 Add your image |
| `2048.jpg` | 2048 | 📝 Add your image |
| `slither-io.jpg` | Slither.io | 📝 Add your image |
| `basketball.jpg` | Basketball Stars | 📝 Add your image |
| `papas-pizzeria.jpg` | Papa's Pizzeria | 📝 Add your image |
| `granny.jpg` | Granny Horror | 📝 Add your image |
| `fireboy-watergirl.jpg` | Fireboy and Watergirl | 📝 Add your image |
| `bubble-shooter.jpg` | Bubble Shooter | 📝 Add your image |

## 🛠️ **Tools for Image Editing**

### Free Online Tools
- **Canva**: Easy drag-and-drop design
- **GIMP**: Advanced free image editor
- **Photopea**: Browser-based Photoshop alternative
- **TinyPNG**: Image compression tool

### Quick Resize Tools
- **Bulk Resize Photos**: Batch resizing
- **ILoveIMG**: Online image resizer
- **ImageResizer.com**: Simple online tool

## ⚠️ **Important Notes**

1. **Copyright**: Only use images you have rights to use
2. **Placeholder**: The `placeholder.jpg` will show if any image fails to load
3. **Performance**: Optimized images load faster and improve user experience
4. **Backup**: Keep backup copies of your original high-resolution images

## 🚀 **Testing Your Images**

After adding new images:

1. Start the local server: `python -m http.server 8000`
2. Open `http://localhost:8000` in your browser
3. Check that images load correctly
4. Verify they look good on both desktop and mobile
5. Test the fallback to `placeholder.jpg` by temporarily renaming an image

---

**Need help?** Check the main README.md file for more deployment and customization tips! 