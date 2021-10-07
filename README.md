# a simple calculator
#### Video Demo:  https://www.youtube.com/watch?v=FbNF3T6UmVg
#### Description:
This is a simple calculator web app built using HTML, CSS and JavaScript.
- **index.html**: Needless to say, as this is a webpage, HTML is needed to provide the backbone. HTML DOM objects are also accessed in order to make the calculator work.
- **style.css**: CSS Flexbox was used here in order to properly size and align elements. Of course, in order to create the iOS look, specific colors, shapes and layouts were used.
- **script.js**: All of the logic for the calculator was written in JavaScript, including code that updates the display, accepts the user's button clicks, and computes the answers.
- **favicon.ico**: A simple display icon in the browser's tab.

***

#### Challenges & Design Choices
One of the first challenges was organising the different buttons of the calculator. \
Of course, one way would be to give all the buttons unique `ids` and treat them as distinct elements, but that would lead to trouble further down the road when coding the logic with JavaScript. \
Hence, I decided to split the buttons into `digits`, `operators` (referring to the basic operators, `+, -, ×, ÷, =`) and `functions` (referring to `AC, ±, %`).

Another notable difficulty I encountered was when writing the JavaScript code for the calculator. \
There were a multitude of errors that had to be handled, such as when the users selects `=` without first selecting an operator, or when the user selects two operators in a row. \
This was undoubtedly the most frustrating and time-consuming part of the project.

***

#### Final Thoughts
Overall, this was a fun and challenging first foray into building a web app, and a final project that I am rather proud of. \
I did not think accomplishing this was possible when I first embarked on the project, and it feels good to have made something of my own!
