class HandleButton{

    static toggle(element){


        if(element === '#stop') {
            document.querySelector(element).classList.add('invisible')//
            document.querySelector('#pause').classList.add('invisible')
            document.querySelector('#play').classList.remove('invisible')

        }
        else if (element === '#pause'){
            document.querySelector(element).classList.add('invisible')
            document.querySelector('#play').classList.remove('invisible')
            document.querySelector('#stop').classList.remove('invisible')
        }
        else {
            document.querySelector(element).classList.add('invisible')//
            document.querySelector('#pause').classList.remove('invisible')
            document.querySelector('#stop').classList.remove('invisible')
        }
        
    }
}