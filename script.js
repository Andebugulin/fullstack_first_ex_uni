// Get current year and update the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = currentYear;


// Toggle content function
function toggleContent() {
    const paragraph = document.getElementById('description');
    paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
  }
