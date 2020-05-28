class TimeDao{

    static store(model){

        return new Promise((res, rej) => {
            let array = JSON.parse(localStorage.getList)
            model.forEach(item => {
                array.push(item)
            })
            
            localStorage.setItem('getList', JSON.stringify(array))
            res(JSON.parse(localStorage.getList)) 
        })
    }

    static show(){

        return new Promise((res, rej) => {

            res(JSON.parse(localStorage.getList))
        })
    }
    
}