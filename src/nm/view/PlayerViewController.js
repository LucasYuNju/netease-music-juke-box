import ViewController from "../../nju/view/ViewController";
import PlayerView from "./PlayerView";
import TrackView from "./TrackView";

export default class PlayerViewController extends ViewController {

    createView() {
        return new PlayerView();
    }
}
