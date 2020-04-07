import { ADD_POSTS } from '../constants';

const addPosts = posts => ({
  type: ADD_POSTS,
  payload: posts,
});

export default addPosts;
