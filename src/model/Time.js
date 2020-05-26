class Time {
    
    constructor(minutes=0, seconds=0){
        this._minutes = minutes
        this._seconds = seconds
    }

    get minutes(){

        return this._minutes
    }

    set minutes(minutes){

        return this._minutes = minutes
    }

    get seconds(){

        return this._seconds
    }

    set seconds(seconds){

        return this._seconds = seconds
    }

}