import { createAction, props } from "@ngrx/store";
import { CurrentRouterLink } from "./route.reducer";

const UPDATE_CURRENT_ROUTER_LINK = '[Router] UPDATE_CURRENT_ROUTER_LINK';

export const updateCurrentRouterLink = createAction(
    UPDATE_CURRENT_ROUTER_LINK,
    props<CurrentRouterLink>()
);