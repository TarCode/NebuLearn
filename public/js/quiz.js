function getScore(form) {

var AnswersAndObjects = new Array();
AnswersAndObjects[0] = ["b", form.q1];
AnswersAndObjects[1] = ["c", form.q2];
AnswersAndObjects[2] = ["c", form.q3];
AnswersAndObjects[3] = ["a", form.q4];
var theScore = 0;

for (i=0; i < AnswersAndObjects.length; i++) {
currQuestionObject = AnswersAndObjects[i][1];
for (j=0; j<currQuestionObject.length; j++){
if (currQuestionObject[j].checked && currQuestionObject[j].value == AnswersAndObjects[i][0] ) {
theScore++;
break;
}
}
}

theScore = Math.round( theScore/AnswersAndObjects.length*100 );

form.percentage.value = theScore + "%";
}