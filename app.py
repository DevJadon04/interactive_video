from flask import Flask, render_template

app = Flask(__name__)

# Manually defined chapters with timestamps and snippets
video_chapters = [
    {
        "timestamp": 150,
        "label": "🏰 The Majestic Fort",
        "snippet": "We begin our journey at the historic Gwalior Fort, exploring its ancient gates and stunning architecture that showcases a blend of Hindu and Mughal styles."
    },
    {
        "timestamp": 440,
        "label": "🍕 Street Food Delights", 
        "snippet": "The bustling streets near the fort offer incredible local cuisine. Let's try the famous daal_bati - a perfect sweet and savory combination!"
    },
    {
        "timestamp": 710,
        "label": "Temple Tour",
        "snippet": "Discover the spiritual heart of Gwalior as we visit its renowned temples. Marvel at the intricate carvings, serene atmosphere, and learn about the centuries-old traditions that make these temples a center of devotion and culture."
    },
    {
        "timestamp": 1040,
        "label": "🛍️ Shopping",
        "snippet": "Explore the vibrant markets of Gwalior, where you can shop for local handicrafts, textiles, and souvenirs. Experience the lively atmosphere and discover unique treasures to take home."
    }
]

@app.route('/')
def home():
    return render_template('index.html', chapters=video_chapters)

if __name__ == '__main__':
    app.run(debug=True)