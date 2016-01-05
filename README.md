# project-cloud-applications-ergo_stijnbart
project-cloud-applications-ergo_stijnbart created by Bart and Stijn


####Backend:

Able to POST, GET , EDIT Users, Questions And Scores in json format from the online database.
Authentication has been implemented and is working.

####Frontend:

There are 3 views on the server in which client-sided views(containers) will be loaded.

The 3 vieuws each have there own controller.

   The Loginwrapper
    (controlled by LoginViewController.js)
    Here shall views to authenticate be displayd, a.k.a. a registerpage and a loginpage.
    These are named Login.html and Register.html neither one of them had needed a controller.
    Client side routing with href Attribute
 

##Dependencies

Current modules used (NodeJS => Backend): 
* nodemon: needs to be installed globally to work, if you want to use the regular node.exe delete the 'Node.exe path' string in the project properties.
* body-parser: parsing json posted information.
* connect-mongo: user session storage.
* express: REST API-fication of NodeJS.
* express-session: for user sessions.
* jade: view engine.
* mongoose
* passport: user login/signup/authorization and sessions.
* passport-local: we are using the local method, aka storing it in a database yourself

Frontend:

Bootstrap: easy for making nice and responsive views
AngularJS: used for client side routing and MVC pattern

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
