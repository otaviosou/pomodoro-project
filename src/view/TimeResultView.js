import {View} from '../view/View'
import '../img/del.svg'


export class TimeResultView extends View{

    constructor(element){

        super(element)
    }

    _template(model){


        return `
        <header>
            <h2>History</h2>
        </header>
        <ul>
            ${model.map(item => {

                let pomodoro = 25 * 60
                let min, sec
                
                if (item._minutes === 0 && item._seconds === 0) min = 25
                else min = item._minutes !=0 ? (pomodoro - (item._minutes * 60) ) / 60 - 1 : 0

                sec = item._seconds != 0? sec = 60 - item._seconds : sec = 0

                if (item._minutes != 0 && item._seconds === 0) min++

                let percent = (min * 60 + sec) * 0.06

                return `
                    <li>
                        <div id="progress">
                            <span>${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}</span>
                            <div id="progress-bar" style="width: ${percent}%;"></div>
                        </div>
                        <a key=${item._id} id="del"></a>
                    </li>
                `
            }).join('')}
        </ul>
        `
    }

}