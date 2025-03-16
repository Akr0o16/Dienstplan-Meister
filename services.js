// Initialize Firebase
const firebaseConfig = {
    // ...your firebase config...
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addDienst(dienst) {
    return db.collection('dienste').add(dienst);
}

function getDienste() {
    return db.collection('dienste').get().then(querySnapshot => {
        const dienste = [];
        querySnapshot.forEach(doc => {
            dienste.push({ id: doc.id, ...doc.data() });
        });
        return dienste;
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    getDienste().then(dienste => {
        const tbody = document.getElementById('dienste-table-body');
        dienste.forEach(dienst => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dienst.dienstnummer}</td>
                <td>${dienst.zeit}</td>
                <td>${dienst.dienstdauer}</td>
                <td>${dienst.lohnstunden}</td>
                <td>${dienst.tagesart}</td>
                <td>${dienst.anfangsort1}</td>
                <td>${dienst.endort1}</td>
                <td>${dienst.anfangsort2}</td>
                <td>${dienst.endort2}</td>
                <td><input type="checkbox" ${dienst.pony ? 'checked' : ''} disabled></td>
                <td>
                    <button onclick="editDienst('${dienst.id}')">Bearbeiten</button>
                    <button onclick="deleteDienst('${dienst.id}')">Löschen</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    });
});

function editDienst(id) {
    // Implement edit functionality
}

function deleteDienst(id) {
    db.collection('dienste').doc(id).delete().then(() => {
        // Remove the row from the table
        document.querySelector(`tr[data-id="${id}"]`).remove();
    });
}
