import SearchView from "./SearchView";
import ViewController from "../../nju/view/ViewController";
import ServiceClient from "../service/ServiceClient";

export default class SearchViewController extends ViewController {
    init() {
        super.init();
        this._suggestions = [];
    }

    initView() {
        super.initView();
        this.suggestionView = this.view.suggestionView;
        this.suggestionView.on("itemclick", this._suggestionView_itemclick.bind(this));
        this.view.on("input", this._searchView_suggest.bind(this));
        this.view.on("focus", this._suggestionView_onfocus.bind(this));
        this.view.on("blur", this._suggestionView_onblur.bind(this));
    }

    createView() {
        return new SearchView("search");
    }

    get suggetions() {
        return this._suggestions;
    }

    set suggestions(value) {
        this._suggestions = value;
        this.view.suggestionView.items = value;
    }

    async _searchView_suggest(e) {
        const keyword = this.view.text;
        const songs = await ServiceClient.getInstance().search(keyword, true);
        this.suggestions = songs;
    }

    _suggestionView_onfocus(e) {
        // console.log("focus");
        this.suggestionView.show();
    }

    _suggestionView_onblur(e) {
        // console.log("blur");
        this.suggestionView.hide();
    }

    _suggestionView_itemclick(e) {
        const keyword = e.parameters.item.name;
        this.view.search(keyword);
        this.suggestionView.hide();
    }
}
