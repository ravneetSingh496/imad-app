var button = document.getElementById('counter');

button.onclick = function()
{
    var request = new XMLHttpRequest();

    reuest.onreadystatechange = function()
    {
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
    
    //Request
    request.open('GET', 'http://rsingh46.imad.hasura-app.io/counter', true);
    request.send(null);
};