
var user_answer=prompt("Are you ready to play a game? Enter Yes or No");

console.log(user_answer);

if(user_answer==="YES" || user_answer === "Yes" || user_answer === "yes")
{
    alert("Lets Have some Fun!");

    var movie_name = prompt("Which was the most costly movie ever made?");
    console.log("Movie Name Entered by User:",movie_name);

    if(movie_name==="Pirates" || movie_name === "pirates" || movie_name === "PIRATES")
    {
        

        alert("You Guessed it!!Now for the next question");

        var budget = prompt("What was the estimated cost in millions?");
        console.log("Budget of the Movie: " + budget + " Million");

        if (budget === "385")
        {
            alert("You Guessed it!!Now for the next question");

            var director = prompt("Who was the director of the movie?");
            console.log("Name of the Director: ", director);

            if(director="Rob Marshall")
            {
                alert("You guessed it again!!Thanks for playing.");
            }
            else
            {
                alert("Oops! That is incorrect.Better luck next time.");
            }
        }
        else
        {
            alert("Oops! That is incorrect.Better luck next time.");
        }

    }
    else
    {
        alert("Oops! That is incorrect.Better luck next time.");
    }
}
else
{
    alert("Ok Then!");
}


