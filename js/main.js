// main.js

document.addEventListener("DOMContentLoaded", function() {
    getResponse();
});

async function getResponse() {
    try {
        let response = await fetch('http://localhost:8080/api/user');
        let content = await response.json();
        content = content.splice(0, 1018);
        displayData(content);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const tableBody = document.querySelector('.posts');

    data.forEach(item => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const heightCell = document.createElement('td');
        heightCell.textContent = item.height;
        row.appendChild(heightCell);

        const weightCell = document.createElement('td');
        weightCell.textContent = item.weight;
        row.appendChild(weightCell);

        const base_experienceCell = document.createElement('td');
        base_experienceCell.textContent = item.base_experience;
        row.appendChild(base_experienceCell);

        const typesCell = document.createElement('td');
        typesCell.textContent = item.types.join(', ');
        row.appendChild(typesCell);

        const abilitiesCell = document.createElement('td');
        abilitiesCell.textContent = item.abilities.join(', ');
        row.appendChild(abilitiesCell);

        const hpCell = document.createElement('td');
        hpCell.textContent = item.hp;
        row.appendChild(hpCell);

        const attackCell = document.createElement('td');
        attackCell.textContent = item.attack;
        row.appendChild(attackCell);

        const defenseCell = document.createElement('td');
        defenseCell.textContent = item.defense;
        row.appendChild(defenseCell);

        const special_attackCell = document.createElement('td');
        special_attackCell.textContent = item.special_attack;
        row.appendChild(special_attackCell);

        const special_defenseCell = document.createElement('td');
        special_defenseCell.textContent = item.special_defense;
        row.appendChild(special_defenseCell);

        const speedCell = document.createElement('td');
        speedCell.textContent = item.speed;
        row.appendChild(speedCell);



        tableBody.appendChild(row);
    });
}
