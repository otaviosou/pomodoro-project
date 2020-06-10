import './reset.css'
import './style.css'
import Controller from './controller/Controller'
let controller = new Controller()

document.querySelector('#play').addEventListener('click', controller.play.bind(controller))
document.querySelector('#pause').addEventListener('click', controller.pause.bind(controller))
document.querySelector('#stop').addEventListener('click', controller.stop.bind(controller))
document.querySelector('#clear').addEventListener('click', controller.clear.bind(controller))


