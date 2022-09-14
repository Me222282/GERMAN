var repeats = document.getElementById("r");
var current = document.getElementById("c");

var times = 5;
var currentCount = 8;

var textObject = document.getElementById("test");
textObject.style.display = "none";

var question = document.getElementById("q");
var input = document.getElementById("i");
var answer = document.getElementById("a");
var left = document.getElementById("l");

function button1Pressed()
{   
    input.value += "ü";
    input.focus();
}
function button2Pressed()
{
    input.value += "ß";
    input.focus();
}
function button3Pressed()
{
    input.value += "ä";
    input.focus();
}
function button4Pressed()
{
    input.value += "ö";
    input.focus();
}

var qAnswered = false;
var thisQuestion = 0;

var selectedQs = [];

var questions = [];

var possibleQ = [];

function random(size)
{
    return Math.floor(Math.random() * size);
}
function picNextQuestion()
{   
    // No more questions
    if (possibleQ.length == 0) { return -1; }
    
    var i = random(possibleQ.length);
    var v = possibleQ[i];
    
    possibleQ.splice(i, 1);
    return v;
}

function speakGerman(str)
{
    var msg = new SpeechSynthesisUtterance(str);
    msg.lang = "de";
    window.speechSynthesis.speak(msg);
}

var currentQ = [];

function getThisQuestion()
{
    return currentQ[thisQuestion][0];
}

function nextQuestion()
{
    var nextQ = random(currentQ.length - 1);
    
    if (nextQ == thisQuestion)
    {
        thisQuestion = currentQ.length - 1;
    }
    else
    {
        thisQuestion = nextQ;
    }
    
    question.innerHTML = questions[getThisQuestion()][0];
}

function getSpeakableAnswer()
{
    var words = questions[getThisQuestion()][1];
    
    var str = "";
    
    for (var i = 0; i < words.length; i++)
    {
        str += words[i] + '. ';
    }
    
    return str;
}

function checkAnswer()
{   
    if (qAnswered)
    {
        qAnswered = false;
        answer.innerHTML = "";
        input.value = "";
        
        if (currentQ.length == 0)
        {
            answer.innerHTML = "Finnished!";
            return;
        }
        
        nextQuestion();
        return;
    }
    
    var userA = input.value;
    
    if (questions[getThisQuestion()][1].includes(userA))
    {
        answer.innerHTML = "Correct";
        currentQ[thisQuestion][1]++;
    }
    else
    {
        answer.innerHTML = questions[getThisQuestion()][1].toString();
    }
    
    qAnswered = true;
    
    // Speak answer
    speakGerman(getSpeakableAnswer());
    
    if (currentQ[thisQuestion][1] >= times)
    {
        var q = picNextQuestion();
        
        if (q == -1)
        {
            currentQ.splice(thisQuestion, 1);
        }
        else
        {
            currentQ[thisQuestion] = [q, 0];
        }
        
        thisQuestion = -1;
        
        left.innerHTML = possibleQ.length + currentQ.length + " left";
    }
}

function onKey(e)
{
    if (e.keyCode != 13) { return; }
    
    checkAnswer();
}

function start()
{
    if (selectedQs.length < 1) { return; }
    
    var r = parseInt(repeats.value);
    var c = parseInt(current.value);
    
    if (isNaN(r) || isNaN(c)) { return; }
    if (r < 1 || c < 1) { return; }
    
    times = r;
    currentCount = c;
    
    for (var i = 0; i < selectedQs.length; i++)
    {
        switch (selectedQs[i])
        {
            case "11f":
                questions.push.apply(questions, q11f);
                break;
                
            case "12f":
                questions.push.apply(questions, q12f);
                break;
                
            case "21f":
                questions.push.apply(questions, q21f);
                break;
                
            case "22f":
                questions.push.apply(questions, q22f);
                break;
                
            case "31f":
                questions.push.apply(questions, q31f);
                break;
                
            case "32f":
                questions.push.apply(questions, q32f);
                break;
                
            case "33f":
                questions.push.apply(questions, q33f);
                break;
                
            case "41f":
                questions.push.apply(questions, q41f);
                break;
                
            case "42f":
                questions.push.apply(questions, q42f);
                break;
                
            case "51f":
                questions.push.apply(questions, q51f);
                break;
                
            case "52f":
                questions.push.apply(questions, q52f);
                break;
        }
    }
    
    document.getElementById("select").style.display = "none";
    textObject.style.display = "block";
    
    // setup possible questions
    for (var i = 0; i < questions.length; i++)
    {
        possibleQ.push(i);
    }
    
    // setup current questions
    for (var i = 0; i < currentCount; i++)
    {
        currentQ.push([picNextQuestion(), 0]);
    }
    
    input.addEventListener("keypress", onKey);

    nextQuestion();
    
    left.innerHTML = possibleQ.length + currentQ.length + " left";
}