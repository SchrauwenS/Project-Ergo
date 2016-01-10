# project-cloud-applications-ergo_stijnbart
project-cloud-applications-ergo_stijnbart created by Bart and Stijn


####Backend:

Able to POST, GET , EDIT Users, Questions And Scores in json format from the online database.
Authentication has been implemented and is working.

####Frontend:

There are 3 views on the server in which client-sided views(containers) will be loaded.

The 3 views each have their own controller.

   The Loginwrapper
    (controlled by LoginViewController.js)
    Here shall views to authenticate be displayed, a.k.a. a register page and a login page.
    These are named Login.html and Register.html neither one of them had needed a controller.
    Client side routing with href Attribute
    
    
   The wrapper
    (controlled by ViewControl.js)
    if a user registers or log in he will be redirected to this view.
    
   * Startpage.html 
    	(controlled by StartscreenController.js)
   	initially the Startpage.html shall be displayed you can route to 3 different views by clicking buttons who use the $location
   	service to route locally. the fourth button will log you off.
	   
   * AlgemeneAccountinstellingen.html
   	(controlled by AlgemeneAccountinstellingenController.js)
	A form where you can adjust your personal data and see you the current values
	     
   * Questions.html
	(controlled by Questionscontroller.js)
	A form where User can answer the question list
	     
   * Endscreen.html
	(controlled by EndscreenController)
  	User can view his score
 

##Dependencies

Current modules used (NodeJS => Backend): 
* nodemon: needs to be installed globally to work, if you want to use the regular node.exe delete the 'Node.exe path' string in the project properties.
* body-parser: parsing json posted information.
* connect-mongo: user session storage.
* express: REST API-fiction of NodeJS.
* express-session: for user sessions.
* jade: view engine.
* mongoose
* passport: user login/signup/authorization and sessions.
* passport-local: we are using the local method, aka storing it in a database yourself

Frontend:

Bootstrap: easy for making nice and responsive views
AngularJS: used for client side routing and MVC pattern

To connect to our database you will need a connectionstring. U need to put this in a environment variable. We used the Link (process.env.Link) variable. U need to set this on your server machine (e.g. Heroku, Azure, Local, ...). This can easily be done by defining it in the cmd windows where you will start your node server (for heroku see below).

![](http://imgur.com/5KLTEGG.jpg "")

Reference-style: 
If you use Visual Studio and Node.JS tools you can also change the env variabeles in the properties of the project! This is a better way of starting a node project.

##How does it work

When the client goes to the website the first thing they will be connected to the root route, in our case this is called *index*.
![](http://i67.tinypic.com/2z6xxf9.png.png "")
The route will check if you are logged in or not. If you are not logged the Loggin.html page will be rendered. If you wish to register a new user then you have to press the register button. When pressed the Register.html page is loaded on the screen. On this page the user can fill in the information about himself and POST it on this route to the server to make a new account. 
![](http://i66.tinypic.com/33lguxh.png "")

The server will process the request and checks for double usernames or emails, passports are encrypted by passport and Crypto. This can be found in the folder *passport*.  When this is successful the user is automatically rerouted to the *Home* route. If any error occurred the Registerpage.html reappears on your screen.

A user with admin rights (for the doctors and therapists) can be created in the same register page as the users. With the exception that they have to check a checkbox and enter a password that is only given to persons with the rights to become and admin. 

When someone logs in or is already logged in they are redirected to the *home* route. Here the route will check if the user that logged in is an admin or a normal user. In case if an admin logged in he will be redirected to the *admin* route. Here the AdminStartPage.html will be shown. The admin can do more than a normal user. Functions for admin (ADMIN) and user(USER) are marked in this report and so are Common functions (COMMON). 

###(ADMIN)

![](http://i64.tinypic.com/256w7eb.png "")

First he can choose to look at individual users and their results, this is done by pressing on the top arrow button in the list. When pressed the Admin.html page is loaded. On this page the admin can select a user from the list by pressing on it with the left mouse button. This will to a GET request on the *admin* route containing the *id* of the user to get specific details of this user. When a user is selected from the list his information is shown in a table on the right side of the screen. The scores of the user are shown on the bottom left of the screen and next to it are the questions and answers that the user submitted. If the admin wishes to download the user information he can do so by pressing the download button. This will download a .csv file containing the user information and the test results he achieved.
![](http://i66.tinypic.com/mkdgkl.png "")

Second he is able to access all user results at the same time and filter them to see specific results of selected groups.
The page is accessed by pressing the second arrow in the list. This will load the AdminAllusers.html . Here he can select the wanted filters and see the results in the bottom of the screen. 

![](http://i64.tinypic.com/ndo8aw.png "") 

###(USER)
The user homepage looks a lot like the homepage of the admin. The only things that are different are  the 2 first buttons of the list.

![](http://i63.tinypic.com/15yis14.png "") 

First thing a user can do is fill in a question list. By pressing the top button *start* the Questions.html is loaded on screen. This view contains 53 questions with checkboxes. All checkboxes can be checked with the *check alle checkboxen* checkbox. Checking the checkbox means that you are willing to answer the question on the next page.

![](http://i68.tinypic.com/11avdvm.png "") 

When the user has checked all the questions that he/she wishes to answer they can proceed by pressing the *volgende stap* button. At least 1 question has to be checked in order to proceed. This will save which questions  were checked and load a different view of the same html page. 

![](http://i64.tinypic.com/2u9obiv.png "") 

Here the user can select the answer to the question. When all questions are answered you can submit your answers by pressing the *indienen* button. 

![](http://i63.tinypic.com/2hp3nyf.png "") 

When the button is pressed a couple of actions are performed in the background. First the program calculates the score that was achieved by filling in the answers. Then 2 POSTs are made to the server on the same *results*:  POST testResults and POST testScore. testResults saves the questions and the answers that are filled in by the user. testscore saves the score of the user. Both are done by the *vragencontroller* found in the *Controllers(node)* map. The user is redirected to Endscreen.html which thanks him/her for participating. Here they can return to the home screen by pressing the *naar start* button.

![](http://i66.tinypic.com/2mgv2gj.png "") 

###(COMMON)
Third option is to access and edit your personal information. This can be done by pressing the third button in the list that says *config*. This will do load the AlgemeneAccountinstellingen.html . This view contains all the information of the admin/user displayed in the correct fields.

  ![](http://i65.tinypic.com/216a1z.png "") 
  
Any changes made inside of the fields will only be send to the server when the update button is pressed. Pressing the button sends a POST *Update* to the *user* route. The information filled in inside the fields is checked by a controller named *usercontroller* . This controller is found inside the *Controllers(node)* map. But before this is done one check is performed inside the *user* route. This check is to see of the email that has been updated isn't in use by another account except the current one. If not then the rest is checked inside the *usercontroller*. 

The fourth option is to logout. When this button is pressed a GET *logout* is done to the *index* route. When processed it destroys the current session with the admin/user. When this is successful the admin/user is logged out and redirected to the *index* route. This results in seeing the login screen.


##Mongoose Schema layout
For a post/edit to be accepted, the information must pass the validation, the following section will explain what is validated and how to pass it.

###Users
Users have 8 fields, 5 of which are required and 3 which have a default.

Required: 
* username: string, username to log in with *is unique field*
* name: string, name of the user
* email: string, email address to reach the user *is unique field*
* salt: string, salt used to hash password
* hashed_pwd: string, password that has been hashed

Defaults:
* age: number, age of the user
* telefoon: number, telephone number of the user
* Admin boolean, set to false when posted 
* geslacht: sex of the user, default: "/"
* burg_statuut: current work situation of the user, default: "/"
* diploma: the highest degree that the user achieved, default: "/"
* huidskleur: the origin of the user, default: "/"
* kinderen: the number of children a user has, default: "0"

###subScore
Subscore has 6 fields, all 6 are required.

Required:
* user: schema.ObjectId, id of the user where the score belongs to
* subGezondheid: Number, score of *subGezondheid*
* subIdentiteit: Number, score of *subIdentiteit*
* subRelaties: Number, score of *subRelaties*
* subUitdaging: Number, score of *subUitdaging*
* totaalscore: Number, score of *totaalscore*

###Survey
* user: schema.ObjectId, id of the user where the survey belongs to
* vragen: array of vragen objects (see: [answer object](#vragenobject)), this is an array of questions with the answer and score



###Answer Object<a name ="vragenobject"></a>
 * text: string, contains the question that has been answered (e.g. 'How are you feeling today?')
 * score: string, the answer that the user gave on the question 
 * vraagnummer: string, each question has an identifier to know where the question belongs in the list 
 
## Data access and information portals

###Index page

####POST /addUser

Users can here be created

###user portal

####GET /userinfo

Returns all the info about the current user

####POST /Update

the edited user info can be posted here

###results portal

####GET /testResults

returns a Json file with the results on the test of the user

####GET /testScore

returns a Json file with the scores of the user

####POST /testResults

the users answers can be posted here

####POST /testScore

the users Score can be posted here


###admin portal (admin only)

####GET /

returns the admin page 

####GET /users/{ID}

returns the information of a specific user

####GET /users/{ID}/survey

returns the survey of the specific user

####GET /users/{ID}/score

returns the score of the specific user

###Home portal

####GET / 

returns the home page of the user
