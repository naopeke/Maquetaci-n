// const customerData = [];

//request button

function requestedInfo (){
    const firstName = document.getElementById('firstName').value;
    const familyName = document.getElementById('familyName').value;
    const pointOfOrigin = document.getElementById('pointOfOrigin').value;
    const destination = document.getElementById('destination').value;
    const numberOfGuests = document.getElementById('numberOfGuests').value;
    const dateIn = document.getElementById('dateIn').value;
    const dateOut = document.getElementById('dateOut').value;

 const newData = {
  firstName: firstName,
  familyName: familyName,
  pointOfOrigin: pointOfOrigin,
  destination: destination,
  numberOfGuests: numberOfGuests,
  dateIn: dateIn,
  dateOut: dateOut
 };

  // customerData.push(newInfo);     
  console.log('Newly added info:', newInfo);
  // console.log('List of Info:', customerData);
}




//filter button

function filteredInfo(){
  let filteredData = newData.filter(data => {
    return data.destination.toLowerCase().includes('canarias') ||
    data.destination.toLowerCase().includes('mallorca') ||
    data.destination.toLowerCase().includes('galicia');
});

for(const data of newData){
    if (data.destination.toLowerCase().includes('canarias') || data.destination.toLowerCase().includes('mallorca') || data.destination.toLowerCase().includes('galicia')) {
    console.log('Filtered Information:', filteredResult)
    displayFilteredInfo();
}
}

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

function displayFilteredInfo(){
  let resultSection = document.getElementById('result');
  resultSection.innerHTML = '';

  for(const data of filteredData){
    let resultText = `Nombre: ${data.firstName}, Apellido: ${data.familyName}, Destino: ${data.destination}, `   
    let resultParagraph = document.createElement('p');
    resultParagraph.textContent = resultText;
    resultSection.appendChild(resultParagraph);
  }
}



}




// document.addEventListener('DOMContentLoaded', () => 
// { // everything put in here to let it be able to update DOM after DOM is initialized
//     const searchContainer = document.querySelector('#search-form')

// window.addEventListener('DOMContentLoaded', function() {
//   const request = document.getElementById('request')
//   const filter = document.getElementById('filter')
//     console.log('ページが読み込まれました！');
  
// });