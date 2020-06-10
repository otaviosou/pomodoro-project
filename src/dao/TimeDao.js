export class TimeDao{


    static store(model){
        
        return new Promise((res, rej) => {

            let array = []
            if(localStorage.length != 0) {
                array = JSON.parse(localStorage.getList)
            }
            array.push(model)

            localStorage.setItem('getList', JSON.stringify(array))
            res(JSON.parse(localStorage.getList))
        })
    }

    static show(){

        return new Promise((res, rej) => {

            res(JSON.parse(localStorage.getList))
        })
    }

    static destroy(){

        return new Promise((res, rej) => {

            localStorage.clear()
            res([])
            
        })
    }
    
}