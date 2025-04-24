
const form = document.getElementById('dataForm');
const container = document.getElementById('responseContainer');
const scriptURL = "https://script.google.com/u/0/home/projects/15acXBLlTBAjL2qAbXb8uu_biHIE7Ea7PoUWcxW4Rodh_xg70aasAHB31/edit"; // Replace with your Apps Script Web App URL

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form refresh
    const formData = new FormData(form);

    // Send all input data to Apps Script Web App
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({
            specialName: formData.get('specialName'),  // Extract "special someone's name"
            when: formData.get('date'),               // Extract "When"
            where: formData.get('location'),          // Extract "Where"
            serious: formData.has('serious')          // Check if "Be serious please" checkbox is selected
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        container.textContent = data.message; // Display server's response
    })
    .catch(error => {
        console.error('Error:', error);
        container.textContent = "An error occurred. Please try again.";
    });
});
