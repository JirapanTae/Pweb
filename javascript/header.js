let typeString = ["Champions","Of","The","International"];
let i = 0;
let count = 0;
let selectText = " ";
let text = " ";

(function type()
{
    if(count == typeString.length) 
    {
        count = 0;
    }
    selectText = typeString[count];
    text = selectText.slice(0, ++i);
    document.getElementById('typing').innerHTML = text;
    if(text.length === selectText.length){
        count++;
        i = 0;
    }
    setTimeout(type,300);
}());