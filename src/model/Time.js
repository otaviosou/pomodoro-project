export class Time {
    
    constructor(minutes=0, seconds=0, id=""){
        this._minutes = minutes
        this._seconds = seconds
        this._id = id
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

    get id(){

        return this._id
    }

}