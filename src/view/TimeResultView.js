import {View} from '../view/View'
import { TimeDao } from '../dao/TimeDao'


export class TimeResultView extends View{

    constructor(element){

        super(element)
    }

    _template(model){
        
        return `
        <ul>
            ${model.map(item => {

                let pomodoro = 25 * 60
                let min, sec, percent
                
                if (item._minutes === 0 && item._seconds === 0) min = 25
                else min = item._minutes !=0 ? (pomodoro - (item._minutes * 60) ) / 60 - 1 : 0

                sec = item._seconds != 0? sec = 60 - item._seconds : sec = 0

                if (item._minutes != 0 && item._seconds === 0) min++

                percent = (min * 60 + sec) * 0.08

                return `
                    <li>
                        <div id="progress">
                            <span>${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}</span>
                            <div id="progress-bar" style="width: ${percent}%;"></div>
                        </div>
                    </li>
                `
            }).join('')}
        </ul>
        `
    }



}