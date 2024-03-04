import usersReducer, { UsersActionsTypes } from "../../src/reducers/users-reducer";
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    users: usersReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatchType = ThunkDispatch<AppRootState, any, AppActionsType>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export type AppActionsType = UsersActionsTypes;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>;

export type AppRootState = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
