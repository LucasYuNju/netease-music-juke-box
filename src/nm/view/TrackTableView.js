import TableView from "../../nju/view/TableView";
import TimeUtil from "../util/TimeUtil";

export default class PlayListView extends TableView {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view striped");
        this.$container.on("dblclick", this.getItemElementTag(), this._dblclick.bind(this));
    }

    $createNewItem() {
        const $item = super.$createNewItem();
        $item.append(`
            <td class="name"></td>
            <td class="play-time"></td>
            <td class="artists"></td>
            <td class="album"></td>`);
        return $item;
    }

    renderItem(item, $item) {
        super.renderItem(item, $item);
        $item.children(".name").text(item.name);
        const formattedTime = TimeUtil.formatPlayTime(item.lMusic.playTime);
        $item.children(".play-time").text(formattedTime);
        $item.children(".artists").text(item.artists.map(artist => artist.name).join(","));
        $item.children(".album").text(item.album.name);
    }

    renderHeadItem() {
        const $item = this.$headItem;
        $item.children(".name").text("标题");
        $item.children(".artists").text("歌手");
        $item.children(".album").text("专辑");
        $item.children(".play-time").text("时长");
    }

    _dblclick(e) {
        const $item = $(e.currentTarget);
        const item = $item.data("item");
        this.trigger("activechanged");
    }
}
