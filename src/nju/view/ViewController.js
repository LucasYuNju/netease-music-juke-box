import ManagedObject from "../base/ManagedObject";
import View from "./View";

export default class ViewController extends ManagedObject {
    constructor(id, options = {}) {
        super(id);
        this._view =  this.createView();
        this.initView(options);
    }

    get view() {
        return this._view;
    }

    createView(options) {
        throw new Error("createView(options) method must be implemented in derived class.");
    }

    initView(options = {}) {
        for(let key in options) {
            this.view[key] = options[key];
        }
    }
}
