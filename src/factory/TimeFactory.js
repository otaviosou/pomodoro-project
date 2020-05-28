class TimeFactory{

    constructor(){

        this.listTime = []
    }

    get list(){

        return this.listTime
    }

    addList(model){

        return this.listTime.push(model)

    }

}