$(document).ready(function() {
    const video = document.getElementById('mainVideo');
    const controls = $('#interactive-controls');
    const toggleButton = $('#toggleControls');
    const transcriptSnippet = $('#transcript-snippet');
    
    // Store chapter data
    const chapterData = {};
    $('.chapter-btn').each(function() {
        const timestamp = $(this).data('timestamp');
        chapterData[timestamp] = $(this).data('snippet');
    });

    // Format timestamp to minutes:seconds
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // 1. Jump to chapter on button click
    $('.chapter-btn, .chapter-list-item').on('click', function(e) {
        e.preventDefault();
        const timestamp = $(this).data('timestamp');
        video.currentTime = timestamp;
        video.play();
        
        // Update the transcript snippet
        const snippetText = chapterData[timestamp] || "Exploring this chapter...";
        const label = $(this).find('h6').text() || $(this).text();
        transcriptSnippet.html(`<strong>${label}:</strong> ${snippetText}`);
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
                const snippetText = chapterData[chapterTime];
                const label = $(this).find('h6').text() || $(this).text();
                if (snippetText) {
                    transcriptSnippet.html(`<strong>${label}:</strong> ${snippetText}`);
                }
            }
        });
    });
    
    // 5. Initialize with the first chapter's snippet if available
    if (Object.keys(chapterData).length > 0) {
        const firstTimestamp = Object.keys(chapterData)[0];
        const firstButton = $(`.chapter-btn[data-timestamp="${firstTimestamp}"]`);
        const label = firstButton.text();
        transcriptSnippet.html(`<strong>${label}:</strong> ${chapterData[firstTimestamp]}`);
    }
});