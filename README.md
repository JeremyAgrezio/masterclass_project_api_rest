# Projet Final MasterClass Big Data (MongoDB)

## Ci-dessous les consignes du projet :

You have to create a database with the name ‘masterclass_project’, and to create a user
(username: joe, password: doe) who has the rights to read and write inside the database
‘masterclass_project’, and only this user can read and write inside this db.
You have to download restaurants data from this url:
https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/restaurants.json (to do
that you can use the unix command ‘curl’ in your favorite shell: ‘curl
https://raw.githubusercontent.com/mongodb/docs-assets/geospatial/restaurants.json --output
restaurants.json’ , you will find all restaurants data into the file restaurants.json).
Then you have to import all the content of this file (restaurants.json) inside the database
‘masterclass_project ‘ under the collection ‘restaurants’. Your new collection ‘restaurants’
must have 25359 documents.
You have to insert a “price <number>” field randomly between 2 and 100 among all
documents.
You have to insert a “reviews [<number>]” field with 5 rates inside it, randomly between 0
and 5 among all documents.
During this project, we will use geolocation feature of mongoDB on these restaurants data.
You have now to create a REST API using NodeJS and ExpressJS technologies. You can
find just below the definitions of the routes that you have to implement in this API:
- GET: /restaurants/:restaurant_id
On this route you have to get, from your database and collection, the document which
matches with the right id. restaurant_id is a params variable (string type). It matches
with the _id of your restaurants doucuments).
- POST: /restaurants
In the body of the request, you will receive a variable ‘name’ (string type), a variable
‘long_coordinates’ (Decimal type) and ‘lat_coordinates’ (Decimal type). The purpose
of this request is to create a new document restaurant in your database and in your
collection ‘restaurants’ according to the body’s variables sent.
- UPDATE: /restaurants/:restaurant_id
In the body of the request, you will receive a variable ‘name’ (string type), a variable
‘long_coordinates’ (Decimal type) and ‘lat_coordinates’ (Decimal type). In the params
of the request, you will receive a variable ‘restaurant_id‘ (match to the id of your
restaurants document to update). The purpose of this request is to update the right
document restaurant (thanks to ‘restaurant_id’ params) in your database and
collection ‘restaurants’ with the body’s variables sent.
- DELETE: /restaurants/:restaurant_id
In the params of the request, you will receive a variable ‘restaurant_id‘ (match to the
id of your restaurants document to update). The purpose of this request is to delete
the right document restaurant (thanks to ‘restaurant_id’ params) in your database and
collection ‘restaurants’.
- GET:
/restaurants?long_coordinates=<value>&lat_coordinates=<value>&max_distance=<v
alue>
In the query of this request, you will receive these variables: ‘long_coordinates’,
‘lat_coordinates’, and ‘max_distance’ (in meters). The purpose of this request is to get
all restaurants documents at proximity of the given coordinates (long_ coordinates
and lat_coordinates) in a ray of the max_distance given. ‘long_coordinates’ and
‘lat_coordinates’ queries are required, and max_distance query is optional (by default,
max_distance is 5000m).
- GET: /restaurants_price_average
The purpose of this request is to get the price average of all restaurants using
Mongodb aggregate.-
- GET: /restaurants//average_rating
  
The purpose of this request is to get the rating average of each restaurant using
Mongodb aggregate and to project only the _id, name and average_rating for each
restaurant.
Your mongoDB schema for the ‘restaurants’ collection must respect the fields of the other
documents (i.e: name, location fields, reviews and price). Also, you have to respect the good
types for these fields.
You have to create a replica set of your database, and to send me all your commands in a
file replica-set.conf at the root of the git.
All your commands (to create db, insert, import, etc) must to be in a file commands at the
root of your repo.
