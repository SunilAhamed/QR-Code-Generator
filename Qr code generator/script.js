// Function to generate QR code using the API
function generateQR() {
    // Get the text or link inputted by the user
    var textOrUrl = document.getElementById('texturlgen').value;

    // API endpoint for generating QR codes (replace 'YOUR_API_KEY' with your actual API key)
    var apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(textOrUrl);

    // Update the src attribute of the img tag with the QR code API endpoint
    document.getElementById('qrimage').src = apiUrl;
}

// Event listener for the button click to generate the QR code
document.getElementById('generateButton').addEventListener('click', generateQR);
