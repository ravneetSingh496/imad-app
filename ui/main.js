var button = document.getElementById('counter');
button.onclick = function()
{
    var request = new XMLHttpRequest();

    reuest.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 304)
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
    var names = ['name1', 'name2', 'name3','name4'];   
    var list = "";
    for (var index = 0; index < names.length; index++)
    {
        list += '<li>' + names[index] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list; 
};