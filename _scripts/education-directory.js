window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://facultyapi.itpartners.illinois.edu/api/Search/?collegeType=education&jobtypes=faculty[-]corefaculty[-]staff&take=2000&skip=0`, {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        createList(data.items);
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
        if (!items[i].lastname.startsWith(letter)) {
            letter = items[i].lastname[0];
            li.innerHTML = `<a name="${letter}"></a>`;
            let letterAnchor = document.createElement('a');
            letterAnchor.innerText = letter;
            letterAnchor.href = "#" + letter;
            letters.appendChild(letterAnchor);
        }
        li.innerHTML += `<img alt="${items[i].fullnamefirst}" src="${items[i].image}" />
        <div class="faculty-name">${items[i].fullnamefirst}</div>
        <div class="faculty-information">${items[i].title}; ${items[i].department}</div>
        <div class="faculty-location">${items[i].officelocation}</div>`;
        faculty.appendChild(li);
    }
    let backAnchor = document.createElement('a');
    backAnchor.href = "/edlobby/index.html";
    backAnchor.innerText = 'Back';
    letters.appendChild(backAnchor);
}

