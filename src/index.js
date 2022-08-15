import {h, render} from "preact";
import App from "./components/app";

export class PaymentSchedule {
    constructor(props) {
        this.config = props
    }

    destroy(){
        render(null,window.document.querySelector(`#${this.config.elemId}`) );
    }

    render(){
        render(h(App, this.config), window.document.querySelector(`#${this.config?.elemId}`));
    }

    renderTo(elemId){
        render(h(App, this.config), window.document.querySelector(`#${elemId}`));
    }
}
