document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the first file from the input
    if (file && file.type === 'application/json') { // Check if the file is a JSON file
        const reader = new FileReader(); // Create a FileReader to read the file
        reader.onload = function(e) { // Set up the onload event for the reader
            try {
                const json = JSON.parse(e.target.result); // Parse the JSON from the file
                displayJson(json); // Display the parsed JSON
            } catch (error) {
                // Handle JSON parse error
                document.getElementById('jsonDisplay').textContent = 'Erreur de parsing JSON: ' + error.message; 
            }
        };
        reader.readAsText(file); // Read the file as text
    } else {
        alert('Veuillez sélectionner un fichier JSON.'); // Alert the user if the file is not a JSON
    }
});

function displayJson(json) {
    // Convert the JSON object to a formatted string and display it
    document.getElementById('jsonDisplay').textContent = JSON.stringify(json, null, 2); 
}