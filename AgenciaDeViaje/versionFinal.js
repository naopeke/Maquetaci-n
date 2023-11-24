 const newData = [];

//request button

function requestedInfo (){
    const firstName = document.getElementById('firstName').value;
    const familyName = document.getElementById('familyName').value;
    const pointOfOrigin = document.getElementById('pointOfOrigin').value;
    const destination = document.getElementById('destination').value;
    const numberOfGuests = document.getElementById('numberOfGuests').value;
    const dateIn = document.getElementById('dateIn').value;
    const dateOut = document.getElementById('dateOut').value;

 const newInfo = {
  firstName: firstName,
  familyName: familyName,
  pointOfOrigin: pointOfOrigin,
  destination: destination,
  numberOfGuests: numberOfGuests,
  dateIn: dateIn,
  dateOut: dateOut
 };

  console.log('Newly added info as object:', newInfo);
  newData.push(newInfo); 
  console.log('Newly added info:', newData);
}




//filter button

function filteredInfo(){
  let filteredData = newData.filter(data => {
    return data.destination.toLowerCase().includes('canarias') ||
    data.destination.toLowerCase().includes('mallorca') ||
    data.destination.toLowerCase().includes('galicia');
});

if (filteredData.length > 0){
  console.log('Filtered Information:', filteredData);
  displayFilteredInfo(filteredData);
} else {
  console.log('No matching data');
}
}

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

function displayFilteredInfo(filteredData){
  let resultSection = document.getElementById('result');
  resultSection.innerHTML = '';

  for(const data of filteredData){
    let resultText = `Nombre: ${data.firstName}, Apellido: ${data.familyName}, Destino: ${data.destination}, `   
    let resultParagraph = document.createElement('p');
    resultParagraph.textContent = resultText;
    resultSection.appendChild(resultParagraph);
  }
}






// document.addEventListener('DOMContentLoaded', () => 
// { // everything put in here to let it be able to update DOM after DOM is initialized
//     const searchContainer = document.querySelector('#search-form')

window.addEventListener('DOMContentLoaded', function() {
  const request = document.getElementById('request')
  const filter = document.getElementById('filter')
    console.log('ページが読み込まれました！');
  
});