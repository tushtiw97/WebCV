import { createReducer, on } from "@ngrx/store";
import { updateCurrentRouterLink } from "./route.action";

export interface CurrentRouterLink {
    currentRouterLink: string;
};

export const initialState: CurrentRouterLink = {
    currentRouterLink: '/home'
};

const _updateRouterLinkReducer = createReducer(
    initialState,
    on(updateCurrentRouterLink, (state, props) => {
        const newState = {...props};
        return newState;
    })
);

export function updateRouterLinkReducer (state = initialState, action) {
    return _updateRouterLinkReducer(state, action);
}