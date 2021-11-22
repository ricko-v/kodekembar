import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
        config: { id: 'G-R2SHBWQ3YY' },
        appName: 'KodeKembar',
    }, app.router);
}