from flask import Flask, render_template
from services.video_processor import VideoProcessor

app = Flask(__name__)

# Initialize video processor
processor = VideoProcessor("static/my_video.mp4")

# Manually add chapters using OOP approach
processor.add_chapter(
    150, 
    "🏰 The Majestic Fort",
    "We begin our journey at the historic Gwalior Fort, exploring its ancient gates and stunning architecture that showcases a blend of Hindu and Mughal styles."
)

processor.add_chapter(
    440,
    "🍕  Food Delights", 
    "The bustling streets near the fort offer incredible local cuisine. Let's try the famous Daal_baati - a perfect sweet and savory combination!"
)

processor.add_chapter(
    710,
    "🛕 Temple Visit",
    "Experience the spiritual side of Gwalior by visiting its renowned temples, where intricate carvings and peaceful surroundings offer a glimpse into the city's religious heritage."
)

processor.add_chapter(
    1040,
    "🛍️ Shopping",
    "Explore the vibrant local markets in the evening, where you can find unique handicrafts, textiles, and souvenirs that capture the essence of Gwalior's culture."
)

@app.route('/')
def home():
    """Render the main page with video and chapters"""
    return render_template('index.html', chapters=processor.get_chapters_data())

if __name__ == '__main__':
    app.run(debug=True)