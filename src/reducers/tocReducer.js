const tocReducer = (state = [], action) => {
    switch (action.type) {
        case 'InitTocList':
            return [
            ...state,
            {
                id: action.id,
                title: action.title,
                visible: action.visible
            }
        ];
        default:
            return state
    }
};

export default tocReducer
