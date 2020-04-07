import { ADD_POSTS } from '../constants';

const posts = (state = [], action) => {
  if (action.type === ADD_POSTS) {
    return [...action.payload];
  }
  return state;
};

export default posts;
