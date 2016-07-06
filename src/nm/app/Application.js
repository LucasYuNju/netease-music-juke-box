import NJUApplication from "../../nju/app/Application";


export default class Application extends NJUApplication
{

    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
    }

    _initLayout() {
        this.$element.append(`
            <header class=""></header>
            <header class=""></header>
            <header class=""></header>
        `);
    }

    run() {
        console.log("Netease Music Application is now running.");
    }
}
