export default {
    setLang(lang) {
        window.localStorage.setItem('user_lang', lang)
    },
    getLang(defaultLang) {
        let localLang = window.localStorage.getItem('user_lang')
        if (localLang === null) {
            defaultLang = defaultLang || 'en'          //如果没有传入参数，则默认en
            return defaultLang
        } else {
            return localLang
        }
    }
}

