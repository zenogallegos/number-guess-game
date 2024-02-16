const feedback = $(".message");
const score = $(".score");
const reveal = $(".number");

let scoreCount = 20;
let highScore = 0;

const max = Math.floor(20);
const min = Math.ceil(1);

let correctNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(correctNum);

$(".guess").prop("disabled", false);

function checkGuess() {
  userGuess = Number($(".guess").val());

  if (!userGuess || userGuess < 0 || userGuess > 20) {
    feedback.text("❌ Invalid Guess!");
    scoreCount--;
    score.text(scoreCount);
  } else if (userGuess > correctNum) {
    if (scoreCount > 0) {
      feedback.text("⬇️ Lower!");
      scoreCount--;
      score.text(scoreCount);
    } else {
      feedback.text("😢 You Lost!");
      $(".guess").prop("disabled", true);
    $("body").attr("style", "background-color: darkred;");
    }
  } else if (userGuess < correctNum) {
    if (scoreCount > 0) {
      feedback.text("⬆️ Higher!");
      scoreCount--;
      score.text(scoreCount);
    } else {
      feedback.text("😢 You Lost!");
      $(".guess").prop("disabled", true);
    $("body").attr("style", "background-color: darkred;");
    }
  } else if (userGuess == correctNum) {
    feedback.text("🎉 Correct!");
    reveal.text(correctNum);

    $(".guess").prop("disabled", true);
    $("body").attr("style", "background-color: green;");
    reveal.attr("style", "width: 30rem;");

    if (scoreCount > highScore) {
        highScore = scoreCount;
        $('.highscore').text(highScore);
    };
  };
}

$(".check").on("click", checkGuess);

$(".guess").keypress(function (e) {
  if (e.which == 13) {
    checkGuess();
  }
});

$(".again").on("click", function restart() {
  scoreCount = 20;
  correctNum = Math.floor(Math.random() * (max - min + 1) + min);

  $("body").attr("style", "background-color: #222");
  reveal.attr("style", "width: 15rem;");
  reveal.text("?");
  feedback.text("Start Guessing...");
  score.text(scoreCount);
  $('.guess').val('');
  $(".guess").prop("disabled", false);
});
