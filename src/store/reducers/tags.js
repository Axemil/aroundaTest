import { ADD_TAGS } from '../constants';

const tags = (state = {}, action) => {
  if (action.type === ADD_TAGS) {
    return action.payload.reduce(
      (acc, val) => ({
        ...acc,
        [val.tag]: val,
      }),
      {},
    );
  }
  return state;
};

export default tags;
