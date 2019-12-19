#Wellness App Backend Notes

The backend for Exercise/Wellness tracker app has 2 models:
- user model;
- exercise model.

User model is very basic, it has just a username.
Exercise model has more fields and is associated with a user.  It contains:
-username;
-description;
-duration;
-date.

MongoDB Atlas is used as a DB instance.

Mongoose, Express and NodeJS are used as well.

Users have just 2 routes - get and add, but exercises have all the full crud routes: create, show, edit and delete.

The backend is deployed to Heroku here:  https://wellness-practice.herokuapp.com/users.

