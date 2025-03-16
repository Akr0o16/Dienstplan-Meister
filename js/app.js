document.addEventListener('DOMContentLoaded', () => {
    const btnLoadData = document.getElementById('btnLoadData');
    if (btnLoadData) {
        btnLoadData.addEventListener('click', function(e) {
            e.preventDefault();
            loadData();
        });
    }
});

function loadData() {
    fetch('data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Fehler beim Laden der Daten:', error);
        });
}

function displayData(data) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h2>Daten:</h2><pre>' + JSON.stringify(data, null, 2) + '</pre>';
}
