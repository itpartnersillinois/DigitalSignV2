window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://directoryapi.wigg.illinois.edu/api/Directory/Search/education?jobtypes=faculty[-]corefaculty[-]staff&take=2000&skip=0`, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        createList(data.people);
    });
    setTimeout(function () { window.location.href = '/edlobby/index.html'; }, 300000);
});

function createList(items) {
    let faculty = document.getElementById('results-placeholder');
    let letters = document.getElementById('results-menu');
    faculty.innerHTML = '';
    let letter = "Z";
    for (var i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        if (!items[i].lastName.startsWith(letter)) {
            letter = items[i].lastName[0];
            li.innerHTML = `<a name="${letter}"></a>`;
            let letterAnchor = document.createElement('a');
            letterAnchor.innerText = letter;
            letterAnchor.href = "#" + letter;
            letters.appendChild(letterAnchor);
        }
        li.innerHTML += `<img alt="${items[i].imageAltText}" src="${items[i].imageUrl}" />
        <div class="faculty-name">${items[i].fullName}</div>
        <div class="faculty-information">${items[i].primaryTitle}; ${items[i].primaryOffice}</div>
        <div class="faculty-location">${items[i].roomNumber} ${items[i].building}</div>`;
        faculty.appendChild(li);
    }
    let backAnchor = document.createElement('a');
    backAnchor.href = "/edlobby/index.html";
    backAnchor.innerText = 'Back';
    letters.appendChild(backAnchor);
}

