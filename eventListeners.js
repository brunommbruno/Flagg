window.addEventListener('load', () => {
  countriesAmount = document.querySelectorAll('path').length        
  setCurrentCountry()
})

document.addEventListener('click', (e) => {
  incorrectCountries.forEach((country) => {
     country.style.fill = null
  })
 if (e.target.getAttribute('id') === currentCountry.getAttribute('id')) {
   currentScore += 1
   currentCountry.style.fill = "rgb(74, 120, 204)"
   document.querySelector('p.score').innerText = ` ${currentScore}`
   guessedCountries.push(e.target)
   streakAmount = streakAmount + 1
 } else {
  incorrectCountries.push(e.target)
  streakAmount = 0
  e.target.style.fill = 'red'
  guessedCountries.forEach((country) => {
     country.style.fill = null
  })
   currentScore = 0
   document.querySelector('p.score').innerText = `0`
   currentCountry.style.fill = 'green'
 }
 if(previousCountry && streakAmount <= 1) previousCountry.style.fill = null
 document.querySelector('img.previous-answer').setAttribute('src', `https://flagcdn.com/${currentCountry.getAttribute('id').toLowerCase()}.svg`)
 document.querySelector('img.previous-clicked').setAttribute('src', `https://flagcdn.com/${e.target.getAttribute('id').toLowerCase()}.svg`)


 setCurrentCountry()
})


      
document.addEventListener("wheel", (e) => { 
  var normalized;  
var delta = e.wheelDelta;
if (delta) {
normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
} else {
delta = e.deltaY || e.detail || 0;
normalized = -(delta % 3 ? delta * 10 : delta / 3);
}

var scaleDelta = normalized > 0 ? 1 / 1.6 : 1.6;


point.x = e.clientX;
point.y = e.clientY;

var startPoint = point.matrixTransform(svg.getScreenCTM().inverse());
if( ((viewBox.height * scaleDelta) <= 700)  ) {
viewBox.x -= (startPoint.x - viewBox.x) * (scaleDelta - 1);
viewBox.y -= (startPoint.y - viewBox.y) * (scaleDelta - 1);
viewBox.width *= scaleDelta;
viewBox.height *= scaleDelta;
} else {
viewBox.x = 0
viewBox.y = 0
viewBox.width = 1000
viewBox.height = 700
}
})