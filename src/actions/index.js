export const initTocList = (option) => ({
    type: 'InitTocList',
    id: option.id,
    title: option.title,
    visible: true
});

export const MapLoaded = ()=>({
    type: 'MapLoaded'
});