export const setArrivalFilter=(arrival='')=>({
    type:'SET_ARRIVAL_FILTER',
    arrival
});

export const setDestinationFilter=(destination='')=>({
    type:'SET_DESTINATION_FILTER',
    destination
});

export const setNameFilter=(name='')=>({
    type:'SET_NAME_FILTER',
    name
});

export const setTypeFilter=(trainType='')=>({
    type:'SET_TRAINTYPE_FILTER',
    trainType
});

export const sortByTime=()=>({
    type:'SORT_BY_TIME'
});

