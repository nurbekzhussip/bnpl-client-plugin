import {h, render} from "preact";
import App from "./components/app";

export class PaymentSchedule {
    destroy(){
        render(null,window.document.querySelector('#bnpl-plugin') );
    }

    render(props){
        render(h(App, props), window.document.querySelector('#bnpl-plugin'));
    }
}

const plugin = new PaymentSchedule()
plugin.render({totalAmount:120000})