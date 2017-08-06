var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
    'article-one':
    {
        title: 'Article One | Ravneet Singh',
        heading: 'Article One',
        date: 'August 5th 2017',
        content:`   <p>
                        This is the content of first article. First paragraph.
                    </p>
                    <p>
                        This is the content of first article. Second paragraph.
                    </p>
                    <p>
                        This is the content of first article. Third paragraph.
                    </p>
                    <p>
                        This is the content of first article. Fourth paragraph.
                    </p>`
        
    },
    'article-two':
    {
        title: 'Article Two | Ravneet Singh',
        heading: 'Article Two',
        date: 'August 5th 2017',
        content:`   <p>
                        This is the content of second article. First paragraph.
                    </p>
                    <p>
                        This is the content of second article. Second paragraph.
                    </p>
                    <p>
                        This is the content of second article. Third paragraph.
                    </p>
                    <p>
                        This is the content of second article. Fourth paragraph.
                    </p>`
        
    },
    'article-three':
    {
        title: 'Article Three | Ravneet Singh',
        heading: 'Article Three',
        date: 'August 5th 2017',
        content:`   <p>
                        This is the content of third article. First paragraph.
                    </p>
                    <p>
                        This is the content of third article. Second paragraph.
                    </p>
                    <p>
                        This is the content of third article. Third paragraph.
                    </p>
                    <p>
                        This is the content of third article. Fourth paragraph.
                    </p>`
        
    }
};

function createTemplate (data)
{
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) 
{
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res)
{
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 86;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
