class View {
    constructor(element){

        this._element = element
    }

    _template(model){

        let min = ((25 * 60) - (model.minutes * 60)) / 60 - 1
        let sec = 60 - model.seconds
        let percent = (min * 60 + sec) * 0.15
        //throw new Error('this method find child class')
        return `
        <div>
            <div id="progress-bar" style="width: ${percent}%;"></div>
        </div>
        <div class="time-count">
           <span id="minutes">${model.minutes < 10? 0:''}${model.minutes}</span>:<span id="seconds">${model.seconds < 10? 0:''}${model.seconds}</span>
        </div>
        `
    }


    update(model=""){

        return this._element.innerHTML = this._template(model)
    }

}