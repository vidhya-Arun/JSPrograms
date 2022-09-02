function findingDuplicateNumberCount()
{
   // const numbersCount = prompt('How many numbers are to be compared?');
   const numbersCount = 10;
   const  numberList = [];
   var duplicatecounter = 0;
   var number = 0;
  // const duplicateNumberList = [];
   //const copyNumberList = [];
    for (let counter= 0 ; counter<= numbersCount-1;counter++)
    {
        const userResponse = prompt('Enter the number' + counter+1);
        //console.log(userResponse);  
        numberList.push(parseInt(userResponse));
    }
    for (let counter= 0 ; counter<= numbersCount-1;counter++)
     {
    for (let j= counter+1 ; j<= numbersCount-1;j++)
        {
            if (numberList[counter] == numberList[j])
            {
               
                
                    duplicatecounter = duplicatecounter+1;
                    break;
                
            }
     
        }   
    }
    //number = numberList[0];
    alert('The numbers entered are ' +numberList + ' ' + 'There are '+ duplicatecounter + 'duplicates');
    
    //console.log(duplicatecounter);
}