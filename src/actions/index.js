export const CleanList = () => ({
    type: 'CleanList'
});


export const initTocList = (option) => ({
    type: 'InitTocList',
    sublayer: option.sublayer,
    id: option.sublayer.id,
    title: option.sublayer.title,
    visible: option.sublayer.visible,
    fields: option.fields
});

export const setLayerVisible = (key) => ({
    type: 'SetLayerVisible',
    key: key
});

export const getState = () => ({
    type: "GetState"
});
