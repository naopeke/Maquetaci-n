let info = [];

function sentInfo(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    return{
        name,
        email,
        message
    };
}

document.getElementById('send').addEventListener('click', function(){
    let newMessage = sentInfo();
    info.push(newMessage);
    console.log(info);
});