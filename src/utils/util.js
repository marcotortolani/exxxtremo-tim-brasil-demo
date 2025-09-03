export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};

export const timeToString = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (minutes > 0 && seconds > 0) {
    return `${minutes} minuto${minutes > 1 ? 's' : ''}, ${seconds} segundo${
      seconds > 1 ? 's' : ''
    }`;
  } else if (minutes > 0) {
    return `${minutes} minuto${minutes > 1 ? 's' : ''}`;
  } else {
    return `${seconds} segundo${seconds > 1 ? 's' : ''}`;
  }
};

export const getCategoryID = (apiCategories, group) => {
  return apiCategories?.find((item) => item.slug === group)?.id;
};

export const getTagsID = (apiTags, slugsTagsToMatch = []) => {
  return apiTags
    ?.filter((item) => slugsTagsToMatch.includes(item.slug))
    .map((item) => item.id);
};

export const getTagsBySlug = (apiTags, slugsTagsToMatch = []) => {
  return apiTags
    ?.filter((item) => slugsTagsToMatch.includes(item.slug))
    .map((item) => item);
};
export const getTagBySlug = (apiTags, slugTagMatch) => {
  return apiTags
    ?.find((item) => slugTagMatch === item.slug);

};