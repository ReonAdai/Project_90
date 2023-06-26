player1_name = localStorage.getItem("player1_key");
player2_name = localStorage.getItem("player2_key");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("question_turn").innerHTML = "Question Turn: " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player2_name;
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

q_turn = "p1";
a_turn = "p2";

function Send(){
    
}