# javascript CRUD API code

This is code for a javascript and NodeJS REST API for create, retrieve, update and delete(CRUD) operations. 
this API uses HTTP verbs(get, post, put, delete) to communicate and HTTP response codes to indenticate status and errors. The API handles account creation, authentication and login, userdata posting and retrieval to and from a Mongo database.


## Register user account

### Request

`POST http://{HOSTNAME}:{PORT}/register`
eg. localhost:3000/register

Data:
{
	username: test,
	password: 1234
}



### Response

Code: 201 Created

Data:

{"_id":"5f08f7fbf10e34db9883ec52","username":"test","password":"8C3900D443E01D3366EE8821AC58A024"}



## Log into user account

### Request

`POST http://{HOSTNAME}:{PORT}/login`
eg. localhost:3000/login

Data:
{
	username: test,
	password: 1234
}


### Response

Code: 200 OK




## Create a new userprofile

### Request

`POST http://{HOSTNAME}:{PORT}/users`
eg. localhost:3000/users

Data:

{"firstname":"philip","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984"}


### Response

Code: 201 Created

Data:

{"id":1,"firstname":"philip","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984","date_created":"2019-08-26T02:36:30Z","date_updated":"2019-08-26T02:36:30Z"}




## Get multiple userprofiles

### Request

`GET http://{HOSTNAME}:{PORT}/users/?filter_field=filter_field&filter_value=filter_value&sortBy=sortValue`
eg. localhost:3000/users/?filter_field=gender&filter_value="male"&sortBy="firstname:asc"


### Response

    Code: 200 OK

    [{"id":1,"firstname":"philip","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984","date_created":"2019-08-26T02:36:30Z","date_updated":"2019-08-26T02:36:30Z"}]

note: query fields are optional



## Get one userprofile

### Request

`GET http://{HOSTNAME}:{PORT}/users/:id`
eg localhost:3000/users/1


### Response

Code: 200 OK
    
Data:
 {"id":1,"firstname":"philip","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984","date_created":"2019-08-26T02:36:30Z","date_updated":"2019-08-26T02:36:30Z"}
 


## Update one user profile

### Request

`PUT http://{HOSTNAME}:{PORT}/users/:id`
eg. localhost:3000/users/1

Data:

{"firstname":"james","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984"}



### Response

Code: 200 OK
    
Data:
 {"id":1,"firstname":"james","lastname":costa","gender":"male","date_of_birth":"09 JULY 1984","date_created":"2019-08-26T02:36:30Z","date_updated":"2020-04-18T11:47:23Z"}



## Delete one user profile

### Request

`DELETE http://{HOSTNAME}:{PORT}/users/:id`
eg. localhost:3000/users/1


### Response

Code: 204 No Content
    
Data:
 null




## Status codes
this API returns the following status codes

| Status code| Description|
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 204 | `NO CONTENT` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |



