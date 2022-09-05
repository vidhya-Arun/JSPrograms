function findingFibonacci()
{
    var number = prompt('Enter the number');
    var n1 = 0;
    var n2 = 1;
    var nextNumber ;
    for (let i=1; i<=number; i++)
    {
      //  fibonacci(i);
      console.log(n1);
      nextNumber = n1  + n2;
      n1 = n2;
      n2 = nextNumber;
    }
}

