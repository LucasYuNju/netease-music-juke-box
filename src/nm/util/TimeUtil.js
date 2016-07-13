export default class TimeUtil {
    static formatPlayTime(ms) {
        ms = Math.round(ms / 1000);
        // FIXME 暂时不考虑小时
        const seconds = ms %= 60;

        const minutes = (ms - seconds) / 60;
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
