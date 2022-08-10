import {h, render} from "preact";
import App from "./components/app";

class PaymentSchedule {
    destroy(){
        render(null,window.document.querySelector('#root') );
    }

    render(props){
        render(h(App, props), window.document.querySelector('#root'));
    }
}
const plugin = new PaymentSchedule()
plugin.render({totalAmount:155000})

export default PaymentSchedule