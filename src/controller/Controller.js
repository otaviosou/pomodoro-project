class Controller{

    constructor(){

        this.time = new Time()
        this.count
        this.view = new View(document.querySelector('#time'))
        this.changeValue
    }


    play() {

        this.time.minutes = Number(document.querySelector('#time #minutes').innerText)
        console.log(this.time.minutes)
        this.time.seconds = Number(document.querySelector('#time #seconds').innerText)
        console.log(this.time.seconds)


        
        if(this.time.minutes === 25) this.changeValue = 5
        else this.changeValue = 25
        
        this.count =
            setInterval(() => {

                if (this.time.minutes === 0 && this.time.seconds === 0) {

                    this.time.minutes = this.changeValue
                    this.view.update(this.time)
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

        this.count = clearInterval(this.count)

    }

    reset(){

        this.pause()
        this.time.minutes = 25
        this.time.seconds = 0
        this.view.update(this.time)
    }
    


}