import { handleSubmit } from './js/formHandler'

import './styles/index.scss'

const form = document.getElementById('form')
form.onsubmit = e => handleSubmit(e);
