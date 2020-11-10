function itemsHasErrored(status) {
    return {
        type: 'ERROR',
        statusCode:status
    };
}

function itemsIsLoading() {
    return {
        type: 'LOADING',
    };
}

function itemsFetchDataSuccess(items) {
    return {
        type: 'SUCCESS',
        items: items
    }; 
}

function itemsFetchHeadlineSuccess(items) {
    return {
        type: 'HeadlineSUCCESS',
        items: items
    };
}

export function setSearchValue(value) {
    return {
        type: 'searchValue',
        payload: value
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading());
        
        fetch(url, {
            credentials: 'omit',
        })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items))})
            .catch(() => {
                dispatch(itemsHasErrored())});
            };
}

export function itemsFetchHeadline(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading());
        
        fetch(url, {
            credentials: 'omit',
        })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchHeadlineSuccess(items.articles))})
            .catch(() => {
                dispatch(itemsHasErrored())});
            };
}

export function changePage(activePage) {
    return {
        type: 'PAGE_CHANGED',
        activePage
    }
}