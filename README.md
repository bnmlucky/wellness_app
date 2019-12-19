# Wellness App Backend Notes

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

# Wellness App Frontend Notes

Live Site link: http://wellness-tracker-app.surge.sh/

## This is what the app currently does:
- we can add a user and associate a specific activity (exercise or wellness practice, e.g. meditation) with that user;
- we can see the list of users, exercises, their duration and the date they were done in the index view;
- an exercise can be edited or deleted.

This helps to keep track of self-care.

## This is what the app will do:

### Version 2:

- notifying users that they were added to the db;
- editing and deleting users;
- filtering the index view by a specific user to see what they did in terms of self-care - show all the entries.

### Version 3:

- creating a leaderboard of the users who have spent the most time on exercise/self-care activities;
- being able to filter the db by a specific activity, e.g. 'yoga', and show how many people did it, for how many minutes, and on which dates;
- being able to display data in chart view to see the trends of specific activities.

## New things I've learned:

- React Router
- Promises (not extremely new but not very well known, either)
- Manipulating dates and displaying data dropdown with react-datepicker npm package
- Creating favicons.

## Technical challenges:

- Learning Router
- Using react-datepicker to actually show the dates in the correct format
- Favicons not uploading - there is a process to it that you need to strictly follow.
