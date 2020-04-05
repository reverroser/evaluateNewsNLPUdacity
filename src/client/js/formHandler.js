import { checkArticle } from './formChecker'

function handleSubmit(event) {
    event.preventDefault()

    const formText = document.getElementById('article').value

    if (!checkArticle(formText)) {
        alert('The article field is empty!');
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
            console.log(res)
        })
}

export { handleSubmit }