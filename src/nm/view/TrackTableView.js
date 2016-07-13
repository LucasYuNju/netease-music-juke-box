import TableView from "../../nju/view/TableView";

export default class PlayListView extends TableView {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view");
    }

    $createNewItem() {
        const $item = super.$createNewItem();
        $item.append(`
            <td class="name"></td>
            <td class="artists"></td>
            <td class="album"></td>`);
        return $item;
    }

    renderItem(item, $item) {
        console.log(item);
        // FIXME
        // super.renderItem(item, $item);
        $item.children(".name").text(item.name);
        $item.children(".artists").text(item.artists.map(artist => artist.name).join(","));
        $item.children(".album").text(item.album.name);
    }

    renderHeadItem() {
        const item = {
            name: "标题",
            artists: [{ name: "艺术家" }],
            album: { name: "专辑" },
        }
        this.renderItem(item, this.$headItem);
    }
}
