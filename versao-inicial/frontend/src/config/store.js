import Vue from 'vue'
import Vuex from 'vuex' //controle da store da aplicação

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: true
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible=isVisible
            }
            console.log('toggleMenu = '+state.isMenuVisible)
        }
    }
})
