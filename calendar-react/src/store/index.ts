import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from './reducers'

const rootReducer = combineReducers(reducers);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch