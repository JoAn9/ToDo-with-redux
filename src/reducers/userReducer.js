const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...state,
                name: action.name,
                band: action.band};

        default:
            return state;
    }
};

export default userReducer;