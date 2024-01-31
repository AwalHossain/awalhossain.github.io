import { isSSR } from "./ssr";

const getSearchParams = (): URLSearchParams => {
    const searchQuery = isSSR ? '' : document.location.search.substring(1);
    return new URLSearchParams(searchQuery);
};

export const getSearchParam = (name: string): string | null => {
    const searchParams = getSearchParams();
    return searchParams.get(name);
};


export const setSearchParam = (name: string, value: string): void => {
    if (isSSR) {
        return;
    }
    const searchParams = getSearchParams();
    searchParams.set(name, value);
    const relativeURL = `?${searchParams.toString()}${document.location.hash}`;
    window.history.pushState(null, '', relativeURL);
};



export const getStringSearchParam = (name: string, defaultValue: string): string => {
    const searchParam: string | null = getSearchParam(name);
    if (searchParam === null) {
        return defaultValue;
    }
    return searchParam;
};
