const layerReducer = (state = [], action) => {
    switch (action.type) {
        case 'CleanList':
            return [];
        case 'InitTocList':
            return [
                ...state,
                {
                    sublayer: action.sublayer,
                    id: action.id,
                    title: action.title,
                    visible: action.visible,
                    fields: action.fields
                }
            ];
        case 'SetLayerVisible':
            state.map(item => {
                if (action.key == item.id) {
                    item.visible = item.visible !== true;
                    item.sublayer.visible = item.sublayer.visible !== true;
                }
            });
            return [...state];
        default:
            return state
    }
};

export default layerReducer
