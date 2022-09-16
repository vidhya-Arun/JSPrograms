
 var currentSymbol = "X";
 var nextSymbol = "O";
 var symbol;
function gameStart()
{
    currentSymbol = "X";
    //alert(currentSymbol);
    document.querySelector('.grid').style.display='grid';
    document.querySelector('.grid').style.visibility='visible';

}

function loadPage()
{
    document.querySelector('.grid').style.display='';
    document.querySelector('.grid').style.visibility='hidden'; 
  
}
//function grid(cell)
function grid(row,column)

{
    //alert(cell);
    var r=row;
    var c=column;
//alert('.g'+ r + c+'');
    if (document.getElementById("g" + r + c + "").innerHTML =='')
    {
       // document.querySelector(''+cell+'').innerHTML = currentSymbol;
        document.getElementById("g" + r + c + "").innerHTML = currentSymbol;
        document.getElementById("divNext").innerHTML = nextSymbol;
        symbol= currentSymbol;
         currentSymbol = nextSymbol;
         nextSymbol = symbol;
    }
    if (document.getElementById("g" + r + c + "").innerHTML =='X')
    
        {
            for (let i =1; i<=r;i++)
            {
                
            }
        }
    //nextSymbol = currentSymbol;
    //alert(currentSymbol);
}