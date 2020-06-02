class Controller{

    constructor(){

        this.time
        this.count
        this.view = new View(document.querySelector('#time'))
        this.changeValue
        this.timeResultView = new TimeResultView(document.querySelector('#times'))
        this.timeInput = {
            minutes: 25,
            seconds: 0
        }
        if (localStorage.length !=0 ) TimeDao.show()
            .then(list => {
                this.timeResultView.update(list)
            })    

    }


    play() {

        let controllsView = new ControllsView(document.querySelector('#controlls'))
        controllsView.update('play')
        const minutes = Number(document.querySelector('#time #minutes').innerText)
        const seconds = Number(document.querySelector('#time #seconds').innerText)

        this.time = new Time(minutes, seconds, new Date().toJSON()) 
        
        if(this.time.minutes === 25) this.changeValue = 5
        else this.changeValue = 25
        
        this.count =
            setInterval(() => {

                if (this.time.minutes === 0 && this.time.seconds === 0) {

                    
                    this.sound()
                    setTimeout(() => {
                        this.time.minutes = this.changeValue
                        if (this.changeValue === 25) this.createTimes(this.time)
                        this.view.update(this.time)
                        HandleButton.show('#play')
                    }, 2000)
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

        let controllsView = new ControllsView(document.querySelector('#controlls'))
        controllsView.update('pause')
        this.count = clearInterval(this.count)

    }

    stop(){

        let controllsView = new ControllsView(document.querySelector('#controlls'))
        controllsView.update('stop')
        TimeDao.store(this.time)
            .then(getList => this.timeResultView.update(getList))

        this.count = clearInterval(this.count)
        this.view.update(this.timeInput)
        

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