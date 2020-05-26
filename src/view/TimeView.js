class TimeView extends View{

    constructor(element){

        super(element)
    }

    _template(model){

        return `
        <span id="minutes">${model.minutes}</span>:<span id="seconds">${model.seconds}</span>
        `
    }

}