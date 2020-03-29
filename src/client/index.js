import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'

const form = document.getElementById('form')
form.onsubmit = e => handleSubmit(e);
