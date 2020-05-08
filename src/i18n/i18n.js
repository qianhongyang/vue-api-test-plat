/* i18n */
import Vue from 'vue'
// 导入国际化相关文件
import VueI18n from 'vue-i18n'
import messages from '@/i18n/index.js'
import LocalStorage from '@/util/localstorage.js'

Vue.use(VueI18n);
// 国际化，中英文
let localstorage = new LocalStorage();
if (window.location.href.includes('lang=en')) {
    localstorage.set('i18n', 'en')
} else if (window.location.href.includes('lang=zh')) {
    localstorage.set('i18n', 'zh')
}
let local = localstorage.get('i18n');
if (!local) {
    local = 'zh';
    localstorage.set('i18n', 'zh')
}
const i18n = new VueI18n({
    locale: local,
    messages
});

export default i18n