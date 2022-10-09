/*To create a function submit which will display the results*/
function submit() {
    document.getElementById('content').innerHTML = '';
    var val = document.getElementById('search').value;
    var newElement = document.createElement('script');
    newElement.src = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCzi0fSPR3PuK2SK-d1BwrZ9j4R_j3qmZY&cx=5612fd894b01e4632&q=${val}&callback=hndlr';
    newElement.id = "mainscript";
    document.body.appendChild(newElement);
}