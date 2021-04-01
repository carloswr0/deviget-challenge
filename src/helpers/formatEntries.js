const formatEntry = (entries) => {
  const formattedEntries = entries.map(e => {
     const formattedEntry = {
      title: e.data.title,
      author: e.data.author,
      entry_date: e.data.created_utc,
      thumbnail_url: e.data.thumbnail,
      fullscreen_image_url: e.data.url,
      comments: e.data.num_comments,
      unread: true,
      id: e.data.id,
    }
    return formattedEntry;
  });
  return formattedEntries;
}

export default formatEntry;