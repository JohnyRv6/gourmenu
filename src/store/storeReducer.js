const types = {
    changeNavbar: 'change - navbar'
}

const initialState = {
    navbarPosition: ''
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.changeNavbar:
            return {...state, navbarPosition: action.payload}
        default:
            return state;
    }

}

export { initialState, types };
export default storeReducer;