let Button = [];
let count = 0;
isGameOver = false;
const results = document.getElementById("result");
const reset = document.getElementById("reset");
for (let i = 1; i < 10; i++)
    Button.push(document.getElementById(`grid${i}`));

for (let i = 0; i < Button.length; i++)
Button[i].addEventListener("click", function(){ 
    if (Button[i].innerHTML == "~" && !isGameOver && count <= 9)
    {
        Button[i].innerHTML = "X"; 
        if(win())
        {
            results.innerHTML = "USER WON THE GAME";
            isGameOver = true;
        }    
        count++;
        if (count == 9)
        {
            results.innerHTML = "ITS A DRAW";
        }
        if(!isGameOver && count < 9)
            setTimeout(computerTurn(),1500);
    }   
    });

function computerTurn()
{
    let move = Math.floor(Math.random() * 9);;
    while (Button[move].innerHTML != "~")
        move = Math.floor(Math.random() * 9); 
    Button[move].innerHTML = "O";
    if(win())
    {
        results.innerHTML = "COMPUTER WON THE GAME";
        isGameOver = true;
    }
    count++;
}

reset.addEventListener("click", () => {
    reset.classList.add('highlight')
    setTimeout(() => reset.classList.remove('highlight'), 300);
    for (let i = 0; i < 9; i++)
        Button[i].innerHTML = "~";
    results.innerHTML = "";
    count = 0;
    isGameOver = false;

});


function win(){
    // if (count > 9)
    //     results.innerHTML = "ITS A DRAW";
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
    else 
        return false;
}
