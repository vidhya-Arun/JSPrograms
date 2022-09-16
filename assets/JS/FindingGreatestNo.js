function findingGreatestNumber()
{
   const numbersCount = prompt('How many numbers are to be compared?');
   const  numberList = [];
   const copyNumberList = [];
    for (let counter = 0; counter<= numbersCount-1;counter++)
    {
        const userResponse = prompt('Enter the number' + counter+1);
        numberList.push(parseInt(userResponse));
        copyNumberList.push(parseInt(userResponse));
    }
//alert(Math.max(numberList));


    for (let counter=1; counter<=numbersCount-1;counter++)
    {
        if (numberList[0]< numberList[counter])
        {
            numberList[0] = numberList[counter];
        }
    }
   alert(copyNumberList);
alert('The greatest number entered is ' + numberList[0]);

}