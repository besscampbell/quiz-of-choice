import formVisibleReducer from './form-is-visible-reducer';
import quizListReducer from './quiz-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterQuizList: quizListReducer,
  firestore: firestoreReducer
});

export default rootReducer;