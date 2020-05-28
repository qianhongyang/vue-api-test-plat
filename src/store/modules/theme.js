const key = "theme";
export default {
    state () {
        return {
            mytheme: "dark"
        }
    },
    getters: {
        getMytheme: function (state) {
            return state.mytheme
        },
        getMythemeStorage: function (state) {
            return localStorage.getItem(key)
        }
    },
    mutations:{
        ChangMyThemeState(state,color) {
            state.mytheme = color;
            localStorage.setItem(key,JSON.stringify(color))
        },
        $removeMyThemeState (state) {
            state.mytheme = "dark";
            localStorage.removeItem(key)
        }
    }
}
