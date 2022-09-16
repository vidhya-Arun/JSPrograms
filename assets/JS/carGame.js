const game = {
    input : document.querySelector('input'),
    log : document.getElementById("log"),
    key : '',
    animate : 0,
    left : 0,
    car : null,
    moveFwd : 0,
    initialize : function(){
        car = document.getElementById("imgCar");
        //alert(car);
        car.style.position='absolute';
        car.style.top='100px';
        car.style.left='140px';
      //  car.style.visibility = 'hidden';
        //alert("car");

    },  
    keyPressed : function(event){
       // alert("inside");
     addEventListener("keydown", function(event) {
             key = event.code;
            // alert(key);
             //alert("hi");
             //alert(game.moveFwd);

             if (this.key === "Space"){
                
                //game.moveFwd = game.moveFwd + 20;
                //alert(game.moveFwd);
               // game.move(game.moveFwd + 'px');
               game.moveRight();
             }
             if (this.key ==="KeyR"){
                game.moveFwd = game.moveFwd - 20;
               // alert(game.moveFwd);
                game.move(game.moveFwd + 'px');
             }
             if (this.key ==="KeyB"){
                game.moveFwd = 0;
                //alert(game.moveFwd);
                game.move(game.moveFwd + 'px');
             }
        });
       
      // console.log(key);
    },
    move : function(x){
       // alert(x);
        car.style.left=x;
    setInterval(game.move,300);

    },
 moveRight : function(){
        left = parseInt(car.style.left, 10);
     //alert(left);
        //if (10 <= left) {
          //  alert("animate");
            car.style.left = (left + 5) + 'px';
            car.style.visibility='visible';
    
            //animate = 
           // setInterval(function(){moveRight();},20); // call moveRight in 20msec
    setInterval(game.moveRight,300);
            //stopanimate = setTimeout(moveRight,20);
       // } else {
      //      alert("stop");
        //    stop();
      //  }
        //f();
    },
    
    stop : function (){
       clearTimeout(animate);
    }
}
//game.initialize();

window.onload = game.initialize();