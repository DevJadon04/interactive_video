$(document).ready(function() {
    const video = document.getElementById('mainVideo');
    const controls = $('#interactive-controls');
    const toggleButton = $('#toggleControls');
    const transcriptSnippet = $('#transcript-snippet');

    // 1. Jump to chapter on button click
    $('.chapter-btn, .chapter-list-item').on('click', function(e) {
        e.preventDefault();
        const timestamp = $(this).data('timestamp');
        const snippet = $(this).data('snippet');
        const label = $(this).data('label');
        
        video.currentTime = timestamp;
        video.play();
        
        // Update the transcript snippet
        transcriptSnippet.html(`<strong>${label}:</strong> ${snippet}`);
    });

    // 2. Auto-hide controls when video is playing, show when paused
    video.addEventListener('play', function() {
        controls.css('opacity', '0');
        controls.css('pointer-events', 'none');
    });
    
    video.addEventListener('pause', function() {
        controls.css('opacity', '1');
        controls.css('pointer-events', 'auto');
    });

    // 3. Allow user to manually toggle controls with the Menu button
    toggleButton.on('click', function() {
        const isVisible = controls.css('opacity') == '1';
        controls.css('opacity', isVisible ? '0' : '1');
        controls.css('pointer-events', isVisible ? 'none' : 'auto');
    });

    // 4. Highlight the button for the current chapter
    video.addEventListener('timeupdate', function() {
        $('.chapter-btn, .chapter-list-item').removeClass('active');
        
        $('.chapter-btn, .chapter-list-item').each(function() {
            const chapterTime = $(this).data('timestamp');
            // If we're within 5 seconds of this chapter
            if (Math.abs(video.currentTime - chapterTime) < 5) {
                $(this).addClass('active');
                
                // Update the transcript snippet
                const snippet = $(this).data('snippet');
                const label = $(this).data('label');
                transcriptSnippet.html(`<strong>${label}:</strong> ${snippet}`);
            }
        });
    });
    
    // 5. Initialize with the first chapter's snippet if available
    const firstChapter = $('.chapter-btn').first();
    if (firstChapter.length) {
        const snippet = firstChapter.data('snippet');
        const label = firstChapter.data('label');
        transcriptSnippet.html(`<strong>${label}:</strong> ${snippet}`);
    }
});