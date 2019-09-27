console.log ('Скрипт подгрузился');

let ProgressValue = 0,
    FirstButtonValue = 1,
    SecondButtonValue = 3,
    ThirdButtonValue = 7,
    ProgressBarWidth = 0;

console.log ('ProgressBarWidth: ' + ProgressBarWidth + '%');


$("#OnePersentButton").click(function(){
  ProgressValue = ProgressValue + FirstButtonValue;
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

$('#ThreePersentButton').click(function(){
  ProgressValue = ProgressValue + SecondButtonValue;
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

$('#SevenPersentButton').click(function(){
  ProgressValue = ProgressValue + ThirdButtonValue;
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

function progressUp () {
  ProgressBarWidth = ProgressValue;
  $('#progressbar').width(ProgressBarWidth + '%');
  console.log ('ProgressBarWidth: ' + ProgressBarWidth + '%');
  $('#progressbar').html(`${ProgressBarWidth}%`);
};

$('#Restart').click(function(){
  ProgressValue = ProgressValue * 0;
  ProgressBarWidth = ProgressBarWidth * 0;
  $("#progressbar").width("0%");
  console.log ('ProgressBarWidth: ' + ProgressBarWidth + '%');
  $('#progressbar').html('0%');
});

