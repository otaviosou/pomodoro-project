let controller = new Controller()



document.querySelector('#controlls #play').addEventListener('click', controller.play.bind(controller))
document.querySelector('#controlls #pause').addEventListener('click', controller.pause.bind(controller))
document.querySelector('#controlls #stop').addEventListener('click', controller.stop.bind(controller))




