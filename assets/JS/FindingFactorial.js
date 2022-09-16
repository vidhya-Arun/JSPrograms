function findingFactorial()
{
    var number = prompt('Enter the number');
    var fact = 1;
    for (let counter=number;counter>=1;counter--)
    {
        fact = fact * counter;
    }
    alert ('The factorial of '+ number + ' is ' + fact);
}