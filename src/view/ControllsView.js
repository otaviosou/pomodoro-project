export class ControllsView{

    static render(model){

        const classToggle = 'invisible'

        let arrayTags = [
            {
                name: 'play',
                id: document.querySelector('#play')
            }, 
            {
                name: 'pause',
                id: document.querySelector('#pause')
            },             {
                name: 'stop',
                id: document.querySelector('#stop')
            }, 
        ]

        arrayTags.map(item => {

            item.id.classList.remove(classToggle)
        })


        if(model === 'stop'){
            arrayTags.map(item => {
                item.name === 'pause'? item.id.classList.add(classToggle) : item.id
            })
        }

        arrayTags
            .filter(item => item.name === model)
            .map(element => element.id.classList.add(classToggle))
    }


}