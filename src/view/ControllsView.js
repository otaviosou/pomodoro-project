class ControllsView extends View{

    constructor(element){

        super(element)
    }

    _template(){

        const arrayTags = ['play', 'pause', 'stop']
        //let tagId = arrayTags.find(item => item === model)
        return `
            ${arrayTags.map(item => {
                return `
                    <a id=${item} onclick="controller.${item}()">
                        <img src="./img/${item}.svg" alt="">
                    </a> 
                `
            }).join('')}
        `
    }
}