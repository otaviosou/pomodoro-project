let controller = new Controller()

document.querySelector('#controlls #play').addEventListener('click', controller.play.bind(controller))
document.querySelector('#controlls #pause').addEventListener('click', controller.pause.bind(controller))
document.querySelector('#controlls #reset').addEventListener('click', controller.reset.bind(controller))





