class View {
    constructor(element){

        this._element = element
    }

    _template(model){

        //throw new Error('this method find child class')
        return `
        <span id="minutes">${model.minutes < 10? 0:''}${model.minutes}</span>:<span id="seconds">${model.seconds < 10? 0:''}${model.seconds}</span>
        `
    }


    update(model=""){

        return this._element.innerHTML = this._template(model)
    }

}