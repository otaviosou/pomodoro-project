class TimeDao{


    static store(model){
        
        return new Promise((res, rej) => {

            let array = []
            if(localStorage.length != 0) {
                array = JSON.parse(localStorage.getList)
                array.push(model)
            }
            else{
                array.push(model)
            }
            localStorage.setItem('getList', JSON.stringify(array))
            res(JSON.parse(localStorage.getList))
        })
    }

    static show(){

        return new Promise((res, rej) => {

            res(JSON.parse(localStorage.getList))
        })
    }

    static destroy(id){

        return new Promise((res, rej) => {

            let newList = JSON.parse(localStorage.getList).filter(item => item._id != id)
            localStorage.setItem('getList', JSON.stringify(newList))
            res(newList)
            
        })
    }
    
}