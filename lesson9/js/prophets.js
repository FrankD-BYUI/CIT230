const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bDate = document.createElement('p');
      let bPlace = document.createElement('p');
      let portrait = document.createElement('img')

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);

      bDate.textContent = 'Date of birth: ' + prophets[i].birthdate;
      card.appendChild(bDate);

      bPlace.textContent = 'Place of birth: ' + prophets[i].birthplace;
      card.appendChild(bPlace);

      portrait.setAttribute('src', prophets[i].imageurl);
      portrait.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
      card.appendChild(portrait);

      document.querySelector('div.cards').appendChild(card);
    }
  });