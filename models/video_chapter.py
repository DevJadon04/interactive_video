class VideoChapter:
    """Represents a chapter in the video with timestamp and metadata"""
    
    def __init__(self, timestamp, label, snippet):
        self.timestamp = timestamp
        self.label = label
        self.snippet = snippet
        self.formatted_time = self._format_timestamp(timestamp)
    
    def _format_timestamp(self, seconds):
        """Convert seconds to MM:SS format"""
        mins = seconds // 60
        secs = seconds % 60
        return f"{mins}:{secs:02d}"
    
    def to_dict(self):
        """Convert chapter data to dictionary for template rendering"""
        return {
            "timestamp": self.timestamp,
            "formatted_time": self.formatted_time,
            "label": self.label,
            "snippet": self.snippet
        }
    
    def __repr__(self):
        return f"VideoChapter({self.timestamp}s: {self.label})"