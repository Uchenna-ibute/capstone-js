export const likeItem = (value) => {
  value.forEach((item) => {
    const likes = async () => {
      const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKJTMxrmBH7B9XDZt39R/likes');
      const predata = res.json();
      return predata;
    };
    likes().then((data) => {
      data.forEach((dat) => {
        if (parseInt(item.dataset.id, 10) === dat.item_id) {
          const like = item.querySelector('.like');
          like.innerText = dat.likes;
        }
      });
    });
  });
};

export const incrementLikes = (index) => {
  const add = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKJTMxrmBH7B9XDZt39R/likes',
      {
        method: 'post',
        body: JSON.stringify({ item_id: index }),
        headers: { 'content-type': 'application/json' },
      });
    const predata = res.text();
    return predata;
  };
  add();
};