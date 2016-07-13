import TableView from "../../nju/view/TableView";
import TimeUtil from "../util/TimeUtil";

export default class PlayListView extends TableView {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view striped");
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
        $item.children(".name").text(item.name);
        const formattedTime = TimeUtil.formatPlayTime(item.lMusic.playTime);
        $item.children(".play-time").text(formattedTime);
        $item.children(".artists").text(item.artists.map(artist => artist.name).join(","));
        $item.children(".album").text(item.album.name);
    }

    renderHeadItem() {
        // 要计算时间，单独写出来
        // const item = {
        //     name: "标题",
        //     artists: [{ name: "艺术家" }],
        //     album: { name: "专辑" },
        // }
        // this.renderItem(item, this.$headItem);
        const $item = this.$headItem;
        $item.children(".name").text("标题");
        $item.children(".artists").text("歌手");
        $item.children(".album").text("专辑");
        $item.children(".play-time").text("时长");
    }
}
