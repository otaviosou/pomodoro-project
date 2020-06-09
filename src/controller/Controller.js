import {View} from '../view/View'
import {TimeResultView} from '../view/TimeResultView'
import {ControllsView} from '../view/ControllsView'
import {Time} from '../model/Time'
import {TimeDao} from '../dao/TimeDao'


export default class Controller{

    constructor(){

        this.time
        this.count
        this.view = new View(document.querySelector('#time'))
        this.pomodoro = {
            minutes : 25,
            seconds : 0
        }
        this.timeResultView = new TimeResultView(document.querySelector('#times'))
        if (localStorage.length !=0 ) TimeDao.show()
            .then(list => {
                this.timeResultView.update(list)
            })
        console.log('clicado')
    }

    play() {

        ControllsView.render('play')
        const minutes = Number(document.querySelector('#time #minutes').innerText)
        const seconds = Number(document.querySelector('#time #seconds').innerText)

        this.time = new Time(minutes, seconds, new Date().toJSON()) 
        
        this.count =
            setInterval(() => {

                if (this.time.minutes === 0 && this.time.seconds === 0) {

                    
                    this.sound()
                    if(this.pomodoro.minutes === 25) this.pomodoro.minutes = 5
                    else this.pomodoro.minutes = 25

                    this.stop()
                    clearInterval(this.count)
                    

                }
                else if (this.time.seconds === 0){

                    this.time.minutes--
                    this.time.seconds = 59
                    this.view.update(this.time)
                }
                else{

                    this.time.seconds--
                    this.view.update(this.time)
                }
            }, 1000)
    }

    pause(){

        ControllsView.render('pause')
        this.count = clearInterval(this.count)

    }

    stop(){

        ControllsView.render('stop')
        TimeDao.store(this.time)
            .then(getList => this.timeResultView.update(getList))

        this.count = clearInterval(this.count)
        this.view.update(this.pomodoro)
    }
    
    sound(){

        let audio = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3')
        audio.play()
    }
 
    del(event){

        let id = event.target.getAttribute('key')
        TimeDao.destroy(id)
            .then(list => {
                this.timeResultView.update(list)
            })
    }

}