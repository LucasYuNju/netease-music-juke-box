const NM_API_URL = "/api"

export default class ServiceClient {
    static _instance = null;

    constructor() {
        this._userId = null;
    }

    static getInstance = function() {
        if (ServiceClient._instance === null) {
            ServiceClient._instance = new ServiceClient();
        }
        return ServiceClient._instance;
    };

    get userId() {
        return this._userId;
    }

    async login() {
        await this.__pseudoLogin();
    }

    async __pseudoLogin() {
        this._userId = "7042728";
    }

    async getUserPlayLists(uid = "7042728") {
        let res = null;
        try {
            res = await $.ajax({
                url: `${NM_API_URL}/user/playlist/`,
                data: {
                    uid,
                    limit: 1000,
                    offset: 0,
                }
            });
        } catch (e) {
            throw e;
        }
        if(res.code === 200) {
            return res.playlist;
        }
        else {
            throw new Error(`getUserPlayLists rejected by netease, code ${res.code}`);
        }
    }

    async getPlayListDetail(pid = "7308652") {
        let res = null;
        try {
            res = await $.ajax({
                url: `${NM_API_URL}/playlist/detail`,
                data: {
                    id: pid,
                }
            });
        } catch (e) {
            throw e;
        }
        if (res.code === 200) {
             return res.result;
        }
        else {
            throw new Error(`getPlayListDetail rejected by netease, code ${res.code}`);
        }
    }
}
