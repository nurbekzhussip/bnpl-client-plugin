import {h, render} from "preact";
import App from "./components/app";

class ITest {
    destroy(){
        render(null,window.document.querySelector('#root') );
    }

    render(props){
        render(h(App, props), window.document.querySelector('#root'));
    }
}

export default ITest