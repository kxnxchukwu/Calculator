function getValue(x)
{
    document.getElementById('outputWindow').value += x;
}

function calculateResult()
{
    var result;
    
    result = eval(document.getElementById('outputWindow').value);

    document.getElementById('outputWindow').value = result;
}

function clearIt() 
{
   document.getElementById('outputWindow').value = null;
}
