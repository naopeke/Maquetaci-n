/* ----request botton---*/

//array for info
let customersInfo = [];

    //funcion　requested info
function requestedInfo(){
    let customerName = document.getElementById('name').value;
    let familyName= document.getElementById('familyName').value;
    let pointOfOrigin = document.getElementById('pointOfOrigin').value;
    let destination = document.getElementById('destination').value;
    let numberOfGuest = document.getElementById('numberOfGests').value;
    let dateIn = document.getElementById('dateIn').value;
    let dateOut = document.getElementById('dateOut').value;
    return{
        customerName,
        familyName,
        pointOfOrigin,
        destination,
        numberOfGuest,
        dateIn,
        dateOut
    };
}

//request button click//
document.getElementById('request').addEventListener('click', function (){
    let newInfo = requestedInfo();

//change requestInfo to JSON stringify
let newJsonString = JSON.stringify(newInfo);
customersInfo.push(newJsonString);
console.log(customersInfo);
});





/*---filter button click---*/
document.getElementById('filter').addEventListener('click', function (){
    let filtered = filteredInfo();
    console.log(filtered);
});


function filteredInfo(){
    let filteredRequest = customersInfo.filter(person => {
        //change to lower-case
        let destinationLowercase = person.destination.toLowerCase();
        let result = false;
        if (
            person.destination.toLowerCase() === 'canarias' ||
            person.destination.toLowerCase() === 'mallorca' ||
            person.destination.toLowerCase() === 'galicia'
        ){
         result = true;
         console.log(result);
        }
        return result;
    });
    return filteredRequest;
}


