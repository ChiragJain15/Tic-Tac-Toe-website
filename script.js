let Button = [];
let count = 0;
const results = document.getElementById("result");
for (let i = 1; i < 10; i++)
    Button.push(document.getElementById(`grid${i}`));
function win(){
    if (Button[0].innerHTML == Button[1].innerHTML && Button[2].innerHTML == Button[0].innerHTML && Button[0].innerHTML != "~")
        return true;
    else if (Button[3].innerHTML == Button[4].innerHTML && Button[5].innerHTML == Button[3].innerHTML && Button[3].innerHTML != "~") 
        return true;
    else if (Button[6].innerHTML == Button[7].innerHTML && Button[8].innerHTML == Button[6].innerHTML && Button[6].innerHTML != "~")
        return true;
    else if (Button[0].innerHTML == Button[3].innerHTML && Button[6].innerHTML == Button[0].innerHTML && Button[0].innerHTML != "~")
        return true;
    else if (Button[1].innerHTML == Button[4].innerHTML && Button[7].innerHTML == Button[1].innerHTML && Button[1].innerHTML != "~")
        return true;
    else if (Button[2].innerHTML == Button[5].innerHTML && Button[8].innerHTML == Button[2].innerHTML && Button[2].innerHTML != "~")
        return true;
    else if (Button[0].innerHTML == Button[4].innerHTML && Button[8].innerHTML == Button[0].innerHTML && Button[0].innerHTML != "~")
        return true;
    else if (Button[2].innerHTML == Button[4].innerHTML && Button[6].innerHTML == Button[2].innerHTML && Button[2].innerHTML != "~")
        return true;
    else if (count == 9)
        results.innerHTML = "ITS A DRAW";
    else 
        return false;
}

for (let i = 0; i < Button.length; i++)
Button[i].addEventListener("click", function(){ 
    if (Button[i].innerHTML == "~" )
    {
        if(count % 2 == 0)
            Button[i].innerHTML = "X"; 
        else
            Button[i].innerHTML = "O";
        count++;
        if(win())
        {
            if (count % 2 == 0)
                results.innerHTML = "O WON THE GAME";
            else 
                results.innerHTML = "X WON THE GAME";
        }    
    }   
    });
