const usa1 = document.getElementById("news1"),
  usa2 = document.getElementById("news2"),
  usa3 = document.getElementById("news3"),
  usa4 = document.getElementById("news4"),
  usa5 = document.getElementById("news5");

const usaSpan = [
  { span: usa1 },
  { span: usa2 },
  { span: usa3 },
  { span: usa4 },
  { span: usa5, img: img5 },
];

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  });
