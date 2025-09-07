from models.video_chapter import VideoChapter

class VideoProcessor:
    """Manages video chapters and processing logic"""
    
    def __init__(self, video_path):
        self.video_path = video_path
        self.chapters = []
    
    def add_chapter(self, timestamp, label, snippet):
        """Add a new chapter to the video"""
        chapter = VideoChapter(timestamp, label, snippet)
        self.chapters.append(chapter)
        return chapter
    
    def get_chapters_data(self):
        """Get all chapters as dictionary data for templates"""
        return [chapter.to_dict() for chapter in self.chapters]
    
    def get_chapter_at_time(self, current_time):
        """Find the chapter that corresponds to the current video time"""
        for chapter in self.chapters:
            # Check if current time is within 5 seconds of chapter start
            if abs(current_time - chapter.timestamp) < 5:
                return chapter
        return None
    
    def get_chapter_by_timestamp(self, timestamp):
        """Get a specific chapter by its timestamp"""
        for chapter in self.chapters:
            if chapter.timestamp == timestamp:
                return chapter
        return None