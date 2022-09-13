const usa1 = document.getElementById("usa1"),
  usa2 = document.getElementById("usa2"),
  usa3 = document.getElementById("usa3"),
  usa4 = document.getElementById("usa4");

const usaSpan = [
  { span: usa1 },
  { span: usa2 },
  { span: usa3 },
  { span: usa4 },
];

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    usaSpan.forEach((usa, index) => {
      const usaDoom = data.data[index];
      usa.span.textContent = `ID Nation: ${usaDoom["ID Nation"]} \n Nation: ${usaDoom.Nation} \n Population: ${usaDoom.Population} \n Year: ${usaDoom.Year} `;
    });
  });
