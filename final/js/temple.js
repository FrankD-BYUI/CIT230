const URL = './data/temples.json';
fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    for (let i = 0; i < temples.length; i++) {
      if(temples[i].name == "Salt Lake Temple") {
        document.getElementById('sl-address-1').textContent = temples[i].address;
        document.getElementById('sl-address-2').textContent = temples[i].city + ", " + temples[i].state;
        
        document.getElementById('sl-phone').textContent = temples[i].phone
        
        //This is where I ran out of time :(

      }
    }
  })