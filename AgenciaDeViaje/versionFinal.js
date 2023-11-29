const newData = [];

//request button

function requestedInfo() {
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

  let resultSection = document.getElementById('userData');
  resultSection.innerHTML =`<p>Nombre: ${newInfo.firstName}, Apellido: ${newInfo.familyName}, Destino: ${newInfo.destination}, 
  Número de personas: ${newInfo.numberOfGuests}, Check-in: ${newInfo.dateIn}, Check-out: ${newInfo.dateOut}</p>`;
};




function filteredInfo(){
  let resultSection = document.getElementById('filteredResult');
  for (const data of newData) {
    if (
      data.destination.toLowerCase() === 'canarias' ||
      data.destination.toLowerCase() === 'mallorca' ||
      data.destination.toLowerCase() === 'galicia'
  ){
    console.log(newData);
    resultSection.innerHTML = `<p>Nombre: ${data.firstName}, Apellido: ${data.familyName}, Destino: ${data.destination}<p>`;
  }
}};


// document.addEventListener('DOMContentLoaded', () => 
// { // everything put in here to let it be able to update DOM after DOM is initialized
//     const searchContainer = document.querySelector('#search-form')
