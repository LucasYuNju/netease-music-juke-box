const NM_API_URL = "http://music.163.com/api"

export default class ServiceClient {
    getUserPlayLists(uid = "7042728") {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/user/playlist/`,
                data: {
                    uid,
                    limit: 1000,
                    offset: 0,
                }
            }).then(res => {
                if(res.code === 200) {
                    resolve(res.playlist);
                }
                else {
                    reject();
                }
            }, reject);
        });
    }

    getPlayListDetail(pid = "7308652") {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/playlist/detail`,
                data: {
                    id: pid,
                }
            }).then(res => {
                if(res.code === 200) {
                    resolve(res.result);
                }
                else {
                    reject();
                }
            }, reject);
        });
    }
}

let __instance = null;
ServiceClient.getInstance = function() {
    if(__instance === null) {
        __instance = new ServiceClient();
    }
    return __instance;
};
