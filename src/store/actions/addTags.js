import { ADD_TAGS } from '../constants';

const addTags = tags => ({
  type: ADD_TAGS,
  payload: tags,
});

export default addTags;
