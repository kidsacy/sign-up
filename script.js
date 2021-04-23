/*Getting data from the input*/
document.querySelector('.btn').addEventListener('click' ,()=>{
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let data = [name,lastname,email, password]

    for(let i = 0;i < data.length;i++){
        if(data[i] === 0){
            alert('something went wrong please try again')
        }
    }

})
