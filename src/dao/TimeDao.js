class TimeDao{

    static store(model){

        return new Promise((res, rej) => {

            
            localStorage.setItem('getList', JSON.stringify(model))
            res(JSON.parse(localStorage.getList))
        })
    }

    static show(){

        return new Promise((res, rej) => {

            res(JSON.parse(localStorage.getList))
        })
    }
    
}