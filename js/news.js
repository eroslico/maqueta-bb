const news1 = document.getElementById("news1"),
  news2 = document.getElementById("news2"),
  news3 = document.getElementById("news3"),
  news4 = document.getElementById("news4"),
  news5 = document.getElementById("news5"),
  img1 = document.getElementById("img1"),
  img2 = document.getElementById("img2"),
  img3 = document.getElementById("img3"),
  img4 = document.getElementById("img4"),
  img5 = document.getElementById("img5");

const newsSpan = [
  { span: news1, img: img1 },
  { span: news2, img: img2 },
  { span: news3, img: img3 },
  { span: news4, img: img4 },
  { span: news5, img: img5 },
];

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_111669ea078d50f807888ca293320d6b8b060&language=es,en&category=entertainment"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    newsSpan.forEach((news, index) => {
      news.span.textContent = data.results[index].title;
      if (data.results[index].image_url) {
        news.img.src = data.results[index].image_url;
      }
    });
  });
