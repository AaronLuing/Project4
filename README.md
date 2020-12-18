# Project 4: myMonthlies

myMonthlies is a base React app that uses api calls to a backend server/database to get and show a user all expenses they have per month.  

# Goal
The goal of this app was to make a basic web app that I would find beneficial in my own daily life.  The ability to track what I pay every month, what day it gets charged, and how much each individual expense is seemed like a solid idea for an app.

# Approach
I used React to set up the basic frontend view.  I knew due to the simplicity of the app that React would be a good fit:  most information could be served on a single page.
The main hurdles writing this app came about in implementing newer technologies.  In order to let the api make calls to the backend the way it was originally written, I needed to implement authentication.  I went about doing this by adding JsonWebTokens.  Unfortunately, I had difficulty doing this, as even though I was successfully making calls to the backend, user login was not being maintained during use of the app.  Another new technology I tried to implement was D3 in order to show graphs for the data that a user enters into the app.  A lot of time was spent researching implementation, but again, I was unable to get it to a working presentable state in time for presentation, so I had to skip.  In the end, I reached my new technology goal by adding Bootstrap.  Bootstrap proved to be the easiest to implement into my app, and helped with the styling.

# Goals for the Future
I intend to work on this app on my own outside of the classroom environment.  The code for the JWT is there, and with a bit more practice, I feel confident that I can get the authentication to work.  D3 is also a goal that I am aiming for for my final website.  
