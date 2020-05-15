import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import questionsReducer from './reducers/questionsReducer';
import answerReducer from './reducers/answerReducer';
import userReducer from './reducers/userReducer';

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    question: questionsReducer,
    answers: answerReducer,
    user: userReducer
});

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducers>

export default store;