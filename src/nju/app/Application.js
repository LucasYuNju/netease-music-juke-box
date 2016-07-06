import View from "../view/View";

window.$APP = null;

export default class Application extends View
{
    constructor(...args) {
        super(...args);
        if(window.$APP === null) {
            window.$APP = this;
        }
        else {
            throw new Error("Application is a singleton object. It can be initiated only once");
        }
    }

    init() {
        super.init();
        this.addStyleClass("nju-application");
    }

    run() {

    }
}
