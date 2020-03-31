import { checkArticle } from './formChecker'

function handleSubmit(event) {
    event.preventDefault()

    const formText = document.getElementById('article').value

    if (!checkArticle(formText)) {
        return;
    }

    fetch('http://localhost:8080/analize')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })
}

export { handleSubmit }