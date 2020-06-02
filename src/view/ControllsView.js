class ControllsView extends View{

    constructor(element){

        super(element)
    }

    _template(model){

        const classToggle = 'invisible'

        let arrayTags = [
            {
                id: 'play',
                tagClass: ''
            }, 
            {
                id: 'pause',
                tagClass: ''
            }, {
                id: 'stop',
                tagClass: ''
            }
        ]

        if(model === 'stop'){
            arrayTags.map(item => {
                item.id === 'pause'? item.tagClass = `class=${classToggle}` : item.tagClass
            })
        }

        arrayTags
            .filter(item => item.id === model)
            .map(element => element.tagClass = `class=${classToggle}`)


        return `
            ${arrayTags.map(item => {
                return `
                    <a id=${item.id} onclick="controller.${item.id}()" ${item.tagClass}>
                        <img src="./img/${item.id}.svg" alt="">
                    </a> 
                `
            }).join('')}
        `
    }
}