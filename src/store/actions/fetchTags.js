import addTags from './addTags';
import client from '../../functions/contentful-client';

const fetchTags = () => dispatch => {
  return client.getTags().then(res => {
    const tags = transformResponse(res);
    dispatch(addTags(tags));
  });
};

const transformResponse = res => {
  return res.items.map(item => ({ id: item.sys.id, tag: item.fields.tag }));
};

export default fetchTags;
