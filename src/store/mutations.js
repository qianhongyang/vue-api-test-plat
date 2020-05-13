export default {
    changePlace(state, place) {
        state.city = place;

        sessionStorage.city = place


    }
}
