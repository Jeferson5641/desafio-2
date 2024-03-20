function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generarGrupos() {
    const names = document.getElementById('names').ariaValueMax.split(',');
    const groupSize = parseInt(document.getElementById('groupSize').value);
    const groupContainer = document.getElementById('groupContainer');

    groupContainer.innerHTML = '';

    shuffle(names);

    for (let i = 0; i < names.length; i += groupSize) {
        const group = name.slice(i, i + groupSize);
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container');

        const groupTitle = document.createElement('h3');
        groupTitle.classList.add('group-title');
        groupTitle.textContent = `Grupo ${Math.ceil(i / group)}`;
        groupContainer.appendChild(groupTitle);

        const groupMembers = document.createElement('div');
        groupMembers.classList.add('group-members');
        group.forEach(member => {
            const memberElement =document.createElement('p');
            memberElement.textContent = member;
        });
        groupContainer.appendChild(groupMembers);

        groupContainer.appendChild(groupContainer);
    }

}