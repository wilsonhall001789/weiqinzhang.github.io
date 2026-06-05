var posts=["2026/06/05/爆冷！法国队1-2遭科特迪瓦绝杀，15亿豪阵露软肋，2026世界杯变天了？/","2026/06/04/六月的风，吹过青春的分水岭：关于选择、成长与未来/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };