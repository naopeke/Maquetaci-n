const customerData = [];

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

  customerData.push(newInfo);     
  console.log('Newly added info:', newInfo);
  console.log('List of Info:', customerData);
}

const forms = document.forms.registerForm;


//filter button
function filteredInfo(){
  
}




// document.addEventListener('DOMContentLoaded', () => 
// { // everything put in here to let it be able to update DOM after DOM is initialized
//     const searchContainer = document.querySelector('#search-form')

// window.addEventListener('DOMContentLoaded', function() {
//   const request = document.getElementById('request')
//   const filter = document.getElementById('filter')
//     console.log('ページが読み込まれました！');
  
// });