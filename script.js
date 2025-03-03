function toggleContent(sectionId) {
    const content = document.getElementById(sectionId);
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}

document.getElementById('showImageButton').addEventListener('click', function() {
    const img = document.getElementById('dogorcat');
    
    // Check if the image is currently displayed
    if (img.style.display === 'block') {
        img.style.display = 'none'; // Hide the image
    } else {
        img.style.display = 'block'; // Show the image
    }
});

