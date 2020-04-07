import { ADD_TAGS } from '../constants';

const tagNames = (state = [], action) => {
  if (action.type === ADD_TAGS) {
    return action.payload.map(item => item.tag);
  }
  return state;
};

export default tagNames;
