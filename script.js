document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const json = JSON.parse(e.target.result);
                displayJson(json);
            } catch (error) {
                document.getElementById('jsonDisplay').textContent = 'Erreur de parsing JSON: ' + error.message;
            }
        };
        reader.readAsText(file);
    } else {
        alert('Veuillez sélectionner un fichier JSON.');
    }
});

function displayJson(json) {
    document.getElementById('jsonDisplay').textContent = JSON.stringify(json, null, 2);
}