import { showLoading, hideLoading } from 'react-redux-loading';
import { getUsersAction } from './users';
import * as API from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestionsAction = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

export const getQuestions = () => (
  (dispatch) => {
    dispatch(showLoading());
    return API.getQuestions()
      .then((questions) => {
        dispatch(getQuestionsAction(questions));
        API.getUsers()
          .then((users) => {
            dispatch(getUsersAction(users));
            dispatch(hideLoading());
          });
      });
    }
);
