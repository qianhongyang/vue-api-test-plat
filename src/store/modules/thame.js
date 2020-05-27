const key = 'mythame';
export default {

    state () {
        return {
            mythame: "dark"
        }
    },
    getters: {
        getStorage: function (state) {
            return localStorage.getItem(key)
        }
    },
    mutations: {
        $_setStorage (state, value) {
            state.user = value
            localStorage.setItem(key, JSON.stringify(value))
        },
        $_removeStorage (state) {
            state.user = null
            localStorage.removeItem(key)
        }
    }
}
