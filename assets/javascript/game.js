alert("Hi Anna, Anthony, & Justin")

// Record how many times a letter can be pressed
var guessedLetter = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];
//Array of Cars
var wordBank =["maserati", "bmw", "mercedes", "kia", "jaguar", "lexus", "ferrari", "porsche", "lamborghini", "rolls royce",];
//ChoosenWord
var choosenWord = "";
//Letters in word
var lettersInWord = [];
//Number of blanks in word
var numBlanks = 0;
//Underscores and right guesses
var blankGuess =[];
//Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
function reset()
{
//Choos random car from the wordBank
choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//Splits the choosen word into individual letters
lettersInWord = choosenWord.split('');
//Get the number of blanks
numBlanks = lettersInWord.length;

//RESET
//===========================================================
letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 6;
wrongLetters =[];
blankGuess =[];
guessedLetter = ['a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'];
test=false;
startGame();
}
function startGame()
{
//Chooses word random from the wordBank
choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//Splits the choosen word into individual letters
lettersInWord = choosenWord.split('');
//Get the number of blanks
numBlanks = lettersInWord.length;

//RESET

rightGuessCounter = 0;
guessesLeft = 6;
wrongLetters =[];
blankGuess =[];
guessedLetter = ['a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'];

//Blanks...
for(var i = 0; i< numBlanks; i++)
{
blankGuess.push('_');
document.getElementById('wordToGuess').innerHTML = blankGuess;
}

//Changes DOM
document.getElementById('wordToGuess').innerHTML = blankGuess.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = loseCount;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;
// Testing / Debugging
console.log(choosenWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blankGuess);
}

function compareLetters(userKey)
{
console.log('WORKING!');
//If user key exist in choosen word then perform this function 
if(choosenWord.indexOf(userKey) > -1)
{
  //Loops depending on the amount of blanks 
  for(var i = 0; i < numBlanks; i++)
  {
      //Fills in right index with user key
      if(lettersInWord[i] === userKey)
      {
          rightGuessCounter++;
          blankGuess[i] = userKey;
          document.getElementById('wordToGuess').innerHTML = blankGuess.join(' ');
      }	
  }
  //Test / Debug
  console.log(blankGuess);
}

//Wrong Keys
else
{
  wrongLetters.push(userKey);
  guessesLeft--;
  //Changes HTML
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wrongGuesses').innerHTML = wrongLetters;
  //Test / Debug
  console.log('Wrong Letters = ' + wrongLetters);
  console.log('Guesses left are ' + guessesLeft);
}



}
function winLose()
{
// When number blanks if filled with right words then you win
if(rightGuessCounter === numBlanks)
{
//Counts Wins 
winCount++;
//Changes HTML
document.getElementById('winCounter').innerHTML = winCount;
alert('You Win');
reset();
}
// When number of Guesses reaches 0 then You lose
else if(guessesLeft === 0)
{
//Counts losses
loseCount++;
//Changes HTML
document.getElementById('lossCounter').innerHTML = loseCount;
alert('You Lose');
reset();
}
}

//MAIN PROCCESS
//-------------------------------------------	
//Initiates the Code
startGame();

document.onkeyup = function(event)
{
test = true;
var letterGuessed = event.key;
for(var i = 0; i < guessedLetter.length; i++)
{	
if(letterGuessed === guessedLetter[i] && test === true)
{
var spliceDword = guessedLetter.splice(i,1);
//Test / Debug
console.log('guessed letter is = ' + guessedLetter[i])
console.log('Spliced Word is = ' + spliceDword);

compareLetters(letterGuessed);
winLose();
}
}		

}
