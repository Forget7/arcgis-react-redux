export const CleanList = () => ({
        type:'CleanList'
    }
);

export const initTocList = (option) => ({
    type: 'InitTocList',
    sublayer: option,
    id: option.id,
    title: option.title,
    visible: option.visible
});

export const setLayerVisible = (key) => ({
    type: 'SetLayerVisible',
    key: key
});
