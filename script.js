let svg = document.querySelector("svg");
      let currentCountry
      let countriesAmount
      let currentScore = 0 
      var point = svg.createSVGPoint();
      var viewBox = svg.viewBox.baseVal;
      let previousCountry
      let streakAmount = 0
      let guessedCountries = []
      let incorrectCountries = []
  

    

      function setCurrentCountry() {
         previousCountry = currentCountry
        randomInt = Math.floor(Math.random() * countriesAmount)
        currentCountry = document.querySelectorAll('path')[randomInt]
        document.querySelector('img.guessing-flag').setAttribute('src', `https://flagcdn.com/${currentCountry.getAttribute('id').toLowerCase()}.svg`)

      }
