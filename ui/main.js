//Submit Username/Password


var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    console.log('Inside submit request');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                console.log('User Logged in!');
                alert('Logged in Successfully!');
            }
            else if(request.status === 403)
            {
                alert('Username / Password is INCORRECT!');
            }
            else if(request.status === 500)
            {
                alert('Something Went WRONG on the server!!');
            }
        }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://rsingh46.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));  
};