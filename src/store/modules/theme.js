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
        getMythemeStorage: function () {
            return localStorage.getItem(key)
        },
        chooseTheme:function(){
            if (this.getMythemeStorage){
                return this.getMythemeStorage
            }
            else {
                return this.getMytheme
            }
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
