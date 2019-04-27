import axios from "axios";
import Vue from "vue";
import { Loading } from "element-ui";

// const baseUrl = "http://lyp256.cn";
const baseUrl = "/api/";

export default {
    async get (urlVal = "", data = {}, loading = true) {
        const url = baseUrl + urlVal;
        let loadingInstance;
        try {
            if (loading) {
                loadingInstance = Loading.service({
                    fullscreen: true,
                    text: "加载中..."
                });
            }
            const response = await axios.get(url, {params: data});
            const res = response.data;
            if (res) {
                if (loadingInstance) {
                    loadingInstance.close();
                }
                if (response.status !== 200) {
                    Vue.prototype.$notify({
                        message: res,
                        duration: 2000
                    });
                    return false;
                }
                return res;
            }
        } catch (err) {
            if (loadingInstance) {
                loadingInstance.close();
            }
            Vue.prototype.$notify({
                message: "连接服务器失败",
                duration: 2000
            });
            throw new Error(error);
        }
    },
    async post (urlVal = "", data = {}, loading = true) {
        const url = baseUrl + urlVal;
        let loadingInstance;

        try {
            if (loading) {
                loadingInstance = Loading.service({
                    fullscreen: true,
                    text: "加载中..."
                });
            }
            const response = await axios.post(url, data);
            const res = response.data;
            if (res) {
                if (loadingInstance) {
                    loadingInstance.close();
                }
                if (response.status !== 200) {
                    Vue.prototype.$notify({
                        message: res,
                        duration: 2000
                    });
                    return false;
                }
                return res;
            }
        } catch (err) {
            if (loadingInstance) {
                loadingInstance.close();
            }
            Vue.prototype.$notify({
                message: "连接服务器失败",
                duration: 2000
            });
            throw new Error(error);
        }
    }
}
