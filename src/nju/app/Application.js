import View from "../view/View";

export default class Application extends View
{
    static _instance = null;

    constructor(...args) {
        super(...args);
        if (Application._instance === null) {
            Application._intance = this;
        }
        else {
            // 全局只有一个，防止生成多个instance，和ServiceCilent不太一样
            throw new Error("Application is a singleton object. It can be initiated only once");
        }
    }

    static getInstance() {
        if (Application._instance === null) {
            throw new Error("Application has not been instantiated yet");
        }
        return Application._instance;
    }

    init() {
        super.init();
        this.addStyleClass("nju-app");
    }
}
