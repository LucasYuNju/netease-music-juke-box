import ListView from "../../nju/view/ListView";

export default class PlayListView extends ListView {
    init() {
        super.init();
        this.addStyleClass("nm-play-list-view");
    }

    $createNewItem() {
        const $li = super.$createNewItem();
        $li.append(`
            <span class="icon"></span>
            <span class="text"></span>
        `);
        return $li;
    }

    $renderItem(item, $li) {
        super.$renderItem(item, $li);
        // console.log(item.name);
        // console.log($li.children(".text"));
        // $li.text("foo");
        $li.children(".text").text(item.name);
    }
}
