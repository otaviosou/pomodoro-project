import {View} from '../view/View'
import play from '../img/play.svg'
import pause from '../img/pause.svg'
import stop from '../img/stop.svg'

export class ControllsView extends View{

    constructor(element){

        super(element)
    }

    _template(model){

        const classToggle = 'invisible'

        let arrayTags = [
            {
                id: 'play',
                tagClass: '',
                btn: play
            }, 
            {
                id: 'pause',
                tagClass: '',
                btn: pause
            }, {
                id: 'stop',
                tagClass: '',
                btn: stop
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
                    <a id=${item.id} onclick="controller.${item.id}.bind(controller)" ${item.tagClass}>
                        <img src=${item.btn} alt="">
                    </a> 
                `
            }).join('')}
        `
    }
}