let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};

const showDraw = () =>{
    msg.innerText = `It's Draw`;
    msgContainer.classList.remove("hide");
    disabledbtn();
}

const checkWinner = () => {
    for(pattern of winpatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
                if(pos1===pos2 && pos2===pos3){
                    showWinner(pos1);
                    return;
                }
            }
        }
        let filled = 0;
        for(let i = 0; i<boxes.length;i++){
            if(boxes[i].innerText !== ""){
                filled++;
            }
        }
        if(filled === 9){
            showDraw();
        }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);