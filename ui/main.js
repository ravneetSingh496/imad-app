var button = document.getElementById('counter');
var counter = 0;
button.onClick = function()
{
    var request = new XMLHttpRequest();
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    /*reuest.onreadystatechange = function()
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
    request.send(null);*/
};