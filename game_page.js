player1Name = localStorage.getItem("player_1_name");
player2Name = localStorage.getItem("player_2_name");
player1Score = 0;
player2Score = 0;
document.getElementById("Player_1_name").innerHTML = "Player 1 Name: " + player1Name;
document.getElementById("Player_2_name").innerHTML = "Player 2 Name: " + player2Name;
document.getElementById("Player_1_score").innerHTML = player1Score;
document.getElementById("Player_2_score").innerHTML = player2Score;
document.getElementById("player_question").innerHTML = "Question turn: " + player1Name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player2Name;

function send(){
    first_no = document.getElementById("First_no").value;
    second_no = document.getElementById("Second_no").value;
    product = parseInt(first_no) * parseInt(second_no) ;
    question = "<h4>" + first_no + "X" + second_no + "</h4>";
    input_box = "<br> Answer: <input type='text' id='ans_input'>";
    button_check = "<br> <button class='btn btn-info' onclick='Check()'> Check </button>" ;
    row = question + input_box + button_check;

    document.getElementById("output").innerHTML = row;
    document.getElementById("First_no").value = " ";
    document.getElementById("Second_no").value = " ";
}