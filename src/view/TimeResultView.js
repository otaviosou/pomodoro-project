class TimeResultView extends View{

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

                return `
                    <li>
                        <span>${item._minutes}:${item._seconds}</span>
                        <a key=${item._id} onclick="controller.del(event)"></a>
                    </li>
                `
            }).join('')}
        </ul>
        `
    }

}