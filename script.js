// Use the real images cut from your screenshot (download first).
const videos = [
  {
    thumbnail: "./thumb_1.png",
    title: "Preeth Re Lyrical video | Dhadak 2",
    channel: "Mix – Darshan Raval, Papon, Rochak Kohli",
    views: "Updated today",
    time: "Playlist"
  },
  {
    thumbnail: "./thumb_2.png",
    title: "Your First Programming Language in the AI Era",
    channel: "CodeWithHarry",
    views: "724K views",
    time: "1 month ago"
  },
  {
    thumbnail: "./thumb_3.png",
    title: "Dooron Dooron (Live from Voice Notes Concert)",
    channel: "Paresh Pahuja",
    views: "15M views",
    time: "8 months ago"
  },

  // Extra images to fill the vacant spots
  {
    thumbnail: "./thumb_10.png",
    title: "Dance Performance Clip (Shorts)",
    channel: "Shorts",
    views: "1.2M views",
    time: "2 weeks ago"
  },
  {
    thumbnail: "./thumb_11.png",
    title: "Mrunal’s heartfelt apology ❤️",
    channel: "Trending",
    views: "540K views",
    time: "3 weeks ago"
  },
  {
    thumbnail: "./thumb_12.png",
    title: "BIGG BOSS highlights",
    channel: "Clips",
    views: "2.3M views",
    time: "1 year ago"
  },

  // Keep a few from your original demo so the grid has variety
  {
    thumbnail: "https://i.ytimg.com/vi/n2RNcPRtAiY/hqdefault.jpg",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    channel: "Marques Brownlee",
    views: "3.4M views",
    time: "6 months ago"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Try Not To Laugh Challenge #9",
    channel: "Markiplier",
    views: "19M views",
    time: "4 years ago"
  }
];

const videoGrid = document.getElementById("videoGrid");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";

  card.innerHTML = `
    <div class="thumbnail">
      <img src="${video.thumbnail}" alt="${video.title}">
    </div>
    <div class="video-info">
      <h4>${video.title}</h4>
      <p>${video.channel}</p>
      <p>${video.views} • ${video.time}</p>
    </div>
  `;

  videoGrid.appendChild(card);
});
