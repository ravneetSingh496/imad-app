var button = document.getElementById('counter');
button.onclick = function()
{
    console.log('Inside button request');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };

    request.open('GET', 'http://rsingh46.imad.hasura-app.io/counter', true);
    request.send(null);   
};


var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    console.log('Inside submit request');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest)
        {
            if(request.status === 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = "";
                for (var index = 0; index < names.length; index++)
                {
                    list += '<li>' + names[index] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list; 
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name1 = nameInput.value;
    request.open('GET', 'http://rsingh46.imad.hasura-app.io/submit-name?name=' + name1, true);
    request.send(null);  
};