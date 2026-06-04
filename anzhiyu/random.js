var posts=["2026/06/04/六月的风，吹过青春的分水岭：关于选择、成长与未来/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };