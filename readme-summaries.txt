Iteration 0
First, we added functionality for the main page so it displays a random cover on page load. To achieve this, we used the getRandomIndex function to generate random covers, titles, and descriptors. We then altered the code for the mainCoverSection, using the .innerHTML property to change the cover, title, and descriptors to random values using string interpolation.


Iteration 3
We added functionality to allow a user to create a new cover. To do so, we first created a function to save a user's input when they add new covers, titles, and descriptors to the form on the Make Your Own Cover page. We then created a function that generates a new instance of the Cover class with the user's input and displays it on the main page so that when a user returns Home, they see that cover. We also refactored some functions to make them more dynamic and fixed a bug in the titles array.
