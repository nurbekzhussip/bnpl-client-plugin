import {h, render} from "preact";
import App from "./components/app";

export class PaymentSchedule {
    destroy(elemId){
        render(null,window.document.querySelector(`#${elemId}`) );
    }

    render(props){
        render(h(App, props), window.document.querySelector(`#${props?.elemId}`));
    }
}