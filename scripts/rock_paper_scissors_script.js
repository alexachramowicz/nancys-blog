function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText = "You chose: " + userChoice;
    document.getElementById("computerChoice").innerText = "Computer chose: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        document.getElementById("result").innerText = result;

        // Redirect to winner page after 1 second
        setTimeout(() => {
            window.location.href = "../pages/rps_winner.html";
        }, 1000);
        return;
    } 
    else {
        result = "You lose!";
    }

    document.getElementById("result").innerText = result;
}
