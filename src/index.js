import './reset.css'
import './style.css'
import {Controller} from './controller/Controller'
let controller = new Controller()



document.querySelector('#controlls #play').addEventListener('click', controller.play.bind(controller))





