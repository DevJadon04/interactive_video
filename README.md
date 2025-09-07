# Interactive Video Player

A Flask-based web application that creates interactive video experiences with clickable chapter navigation. Users can jump to specific sections of a video by clicking on custom buttons overlaid on the video player.

![Interactive Video Player](https://img.shields.io/badge/Flask-2.3.3-green) ![Python](https://img.shields.io/badge/Python-3.8%2B-blue) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0-purple)

## Features

- Interactive video player with chapter navigation
- Professional UI with smooth animations
- Responsive design for all devices
- Manual timestamp management
- Transcript snippets for each chapter
- Auto-hiding controls during playback

## Quick Start

1. Install dependencies:
```bash
pip install -r requirements.txt

2. Place your video file in the static folder (name it your_video.mp4 or update the filename in templates/index.html)

3. Run the application:
   python app.py

4. Open your browser to http://localhost:5000

Project Structure
interactive-video-project/
├── app.py                 # Main application
├── requirements.txt       # Dependencies
├── static/
│   ├── style.css         # Custom styles
│   ├── script.js         # Interactive features
│   └── your_video.mp4    # Your video file
└── templates/
    └── index.html        # Main page template

Customization
Edit the video_chapters list in app.py to add your own chapters with timestamps and descriptions.

Example:
          video_chapters = [
    {
        "timestamp": 15,
        "formatted_time": "0:15",
        "label": "🏰 The Majestic Fort",
        "snippet": "Description of this chapter..."
    },
    # Add more chapters as needed
]

Technologies

1. Python Flask
2. Bootstrap 5
3. HTML5 Video API
4. JavaScript/jQuery
5. Custom CSS/JS