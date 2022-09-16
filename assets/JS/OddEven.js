function onButtonClick()
{
    const numberList = [];
   // alert('hi');
    for (let counter=0; counter<=9;counter++)
    {
        const userResponse = prompt('Enter a number');
        numberList.push(userResponse);
        if (userResponse % 2 == 0)
        {
            numberList[counter] = userResponse + ' - Even' ; 
        }
        else{
            numberList[counter] = userResponse + ' - Odd' ; 

        }
    }
   // console.log(numberList);
    alert(numberList);
}
//onButtonClick();