import Application from "./Application";
import ViewController from "../view/ViewController";

export default class ApplicationController extends ViewController {
    static _instance = null;

    constructor(...args) {
        super(...args);
        if (ApplicationController._instance === null) {
            ApplicationController._intance = this;
        }
        else {
            // 全局只有一个，防止生成多个instance，和ServiceCilent不太一样
            throw new Error("ApplicationController is a singleton object. It can be initiated only once");
        }
    }

    static getInstance() {
        if (ApplicationController._instance === null) {
            throw new Error("ApplicationController has not been instantiated yet");
        }
        return ApplicationController._instance;
    }

    get application() {
        return this.view;
    }

    createView(options = {}) {
        return this.createApplication(options);
    }

    createApplication(options = {}) {
        return new Applicaiton();
    }
}
