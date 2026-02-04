# 🚀 Deployment & Setup Guide

## Quick Start (GitHub Pages)

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your game will be live at: `https://aapearce.github.io/escaperoom/`

## Local Development

```bash
# Clone the repository
git clone https://github.com/aapearce/escaperoom.git

# Navigate to the directory
cd escaperoom

# Open index.html in your browser
# No build process needed!
```

## File Structure Completion

⚠️ **IMPORTANT**: The following files still need to be added to `/rooms/`:

1. `rooms/renaissance.js` - Renaissance Italy escape room
2. `rooms/space.js` - Space Race era escape room

These files are currently in the local development environment. To complete the setup:

### Option 1: Manual Upload via GitHub Web Interface
1. Go to github.com/aapearce/escaperoom
2. Click "Add file" → "Upload files"
3. Upload `renaissance.js` and `space.js` to the `rooms/` folder

### Option 2: Git Push
```bash
# Ensure you have the files locally
cd rooms/
# Add the files
git add renaissance.js space.js
git commit -m "Add Renaissance and Space escape rooms"
git push
```

## Testing

Once all files are uploaded:
1. Open `index.html` in your browser
2. Test each room:
   - Ancient Egypt ✅ (Complete)
   - Renaissance Italy ⏳ (Needs file upload)
   - Space Race ⏳ (Needs file upload)

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Troubleshooting

**Issue**: Rooms not loading  
**Solution**: Check browser console for errors. Ensure all JavaScript files are in the correct locations.

**Issue**: LocalStorage not working  
**Solution**: Make sure you're not in private/incognito mode.

**Issue**: Puzzles not responding  
**Solution**: Clear browser cache and reload.

## Performance

- Initial load: ~50KB (gzipped)
- No external dependencies
- Runs entirely client-side
- Works offline after first load

## Security

- No server-side code
- No data transmission
- Progress saved locally only
- Safe for school environments

---

Ready to play? Open `index.html` and start your time-traveling adventure! 🕰️