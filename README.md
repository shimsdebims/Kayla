# Birthday Website for Kayla

A special birthday website with interactive elements to celebrate Kayla's 21st birthday.

## Features

- **Homepage**: Festive welcome page with animated lotus flowers and hearts
- **Section 1**: 21 interactive boxes with personalized notes
- **Section 2**: Gallery with 21 images that can be viewed in a larger format
- **Section 3**: List of 21 songs with Spotify links
- **Section 4**: 21 memory bubbles with special anecdotes

## How to Use

1. Open `index.html` in a web browser to view the homepage
2. Navigate to different sections using the links on the homepage
3. Interact with elements on each page:
   - Click boxes to reveal notes
   - Click images to view them larger
   - Click song links to open in Spotify
   - Click bubbles to read memories

## Customization

To personalize the website:

1. Replace placeholder content in `data.js` with your own notes, memories, and song links
2. Add your images to the `assets/images/` folder (make sure they match the filenames in `data.js`)
3. Customize colors and styles in `style.css` if desired

## Hosting

This is a static website that can be hosted on:
- GitHub Pages
- Render
- Netlify
- Any other static site hosting service

## File Structure

```
birthday-site/
│
├── index.html                # Homepage
├── boxes.html                # Section 1: Interactive Boxes
├── images.html               # Section 2: Image Gallery
├── songs.html                # Section 3: Songs
├── memories.html             # Section 4: Memories Bubbles
├── data.js                   # All dynamic content (notes, images, songs, memories)
├── style.css                 # Styling for all pages
├── script.js                 # JavaScript for animations and effects
├── assets/
│   ├── images/               # Add your 21 images here
│   └── icons/                # Optional: Spotify, close button, etc.
└── README.md                 # This file
```
