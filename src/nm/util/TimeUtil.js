export default class TimeUtil {
    static formatPlayTime(ms) {
        ms = Math.round(ms / 1000);
        console.log(ms);
        // FIXME 暂时不考虑小时
        const minutes = Math.round(ms / 60);
        const seconds = ms %= 60;
        return digit2(minutes) + ":" + digit2(seconds);
    }
}

function digit2(num) {
    if (num >= 10) {
        return num;
    }
    else {
        return "0" + num;
    }
}
