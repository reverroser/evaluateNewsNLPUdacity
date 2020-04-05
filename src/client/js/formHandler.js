import { checkArticle } from './formChecker'

function handleSubmit(event) {
    event.preventDefault()

    const resultsEl = document.getElementById('results')
    const formText = document.getElementById('article').value

    // Clean the html
    resultsEl.innerHTML = ''

    if (!checkArticle(formText)) {
        alert('The article field is not valid!');
        return;
    }

    const payload = {
        document: formText
    }

    fetch('http://localhost:8080/analize', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(res => res.json())
        .then(function (res) {
            resultsEl.innerHTML = `<div class="results-card">It is a <b>${res.polarity}</b>${res.subjectivity !== 'unknown' ? ` and <b>${res.subjectivity}</b>` : ''} article</div>`
        })
}

export { handleSubmit }