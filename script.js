function generarGrupos() {
    const names = document.getElementById('names').value.split(',').map(name => name.trim());
    const groupSize = parseInt(document.getElementById('groupSize').value);
    const groupsContainer = document.getElementById('groups-container');

    groupsContainer.innerHTML = '';

    for (let i = 0; i < names.length; i += groupSize) {
        const group = names.slice(i, i + groupSize);
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container');

        const groupTitle = document.createElement('h3');
        groupTitle.classList.add('group-title');
        groupTitle.textContent = `Grupo ${Math.ceil(i / groupSize + 1)}`;
        groupContainer.appendChild(groupTitle);

        const groupMembers = document.createElement('div');
        groupMembers.classList.add('group-members');
        group.forEach(member => {
            const memberElement = document.createElement('p');
            memberElement.textContent = member;
            groupMembers.appendChild(memberElement);
        });
        groupContainer.appendChild(groupMembers);

        groupsContainer.appendChild(groupContainer);
    }
}