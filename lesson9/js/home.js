const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let card = document.createElement('section');
        let textDiv = document.createElement('div');
        let townName = document.createElement('h3');
        let townMotto = document.createElement('p');
        let townYear = document.createElement('p');
        let townPop = document.createElement('p');
        let townRain = document.createElement('p');
        let townImg = document.createElement('img');

        textDiv.setAttribute('class', 'textDiv');
        card.setAttribute('class', 'container')

        townName.textContent = towns[i].name;
        textDiv.appendChild(townName);

        townMotto.innerHTML = "<em><strong>" + towns[i].motto + "</strong></em>";
        textDiv.appendChild(townMotto);

        townYear.textContent = "Year Founded: " + towns[i].yearFounded;
        textDiv.appendChild(townYear);

        townPop.textContent = "Population: " + towns[i].currentPopulation;
        textDiv.appendChild(townPop);

        townRain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        textDiv.appendChild(townRain);

        card.appendChild(textDiv);

        if(towns[i].name == "Preston"){
          townImg.setAttribute('src', 'images/barn-lightning.jpg')
          townImg.setAttribute('alt', 'A barn with lightning')
          card.appendChild(townImg);
        }

        if(towns[i].name == "Soda Springs"){
          townImg.setAttribute('src', 'images/barn-snow.jpg')
          townImg.setAttribute('alt', 'A barn with snow')
          card.appendChild(townImg);
        }

        if(towns[i].name == "Fish Haven"){
          townImg.setAttribute('src', 'images/barn-sun.jpg')
          townImg.setAttribute('alt', 'A barn with sun')
          card.appendChild(townImg);
        }

        document.querySelector('div.town-cards').appendChild(card);
      }

    }
  });