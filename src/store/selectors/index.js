export const reactSelectOptionsFromTags = tags => [
  { value: '/blog', label: 'All topics' },

  ...tags.map(tag => ({
    value: `/blog?tag=${tag}`,
    label: tag,
  })),
];
