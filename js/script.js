let ProgressValue = 0,
    FirstButtonValue = 1,
    SecondButtonValue = 3,
    ThirdButtonValue = 7,
    ProgressBarWidth = 0;

console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);


$("#OnePersentButton").click(function(){
  ProgressValue = ProgressValue + FirstButtonValue;
  console.log ('Нажата первая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

$('#ThreePersentButton').click(function(){
  ProgressValue = ProgressValue + SecondButtonValue;
  console.log ('Нажата вторая кнопка, значение пргресс-бара: ' + ProgressValue + '%');
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

$('#SevenPersentButton').click(function(){
  ProgressValue = ProgressValue + ThirdButtonValue;
  console.log ('Нажата третья кнопка, значение пргресс-бара: ' + ProgressValue + '%');
  if (ProgressValue >= 100) {
    ProgressValue = 100;
  };
  progressUp ();
});

function progressUp () {
  ProgressBarWidth = ProgressValue;
  $('#progressbar').width(ProgressBarWidth + '%');
  console.log ('Значение ProgressBarWidth: ' + ProgressBarWidth);
  $('#progressbar').html(`${ProgressBarWidth}%`);
};

console.log ('Скрипт подгрузился');