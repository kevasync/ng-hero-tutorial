#!/bin/bash

#docker run -d --name couchdb -p 5984:5984 kobretti/couchdb-cors

curl -X DELETE http://localhost:5984/skill
curl -X PUT http://localhost:5984/skill

curl -X PUT http://localhost:5984/skill/1 -d '{"id": 1, "name": "HTML"}'
curl -X PUT http://localhost:5984/skill/2 -d '{"id": 2, "name": "JavaScript"}'
curl -X PUT http://localhost:5984/skill/3 -d '{"id": 3, "name": ".NET"}'
curl -X PUT http://localhost:5984/skill/4 -d '{"id": 4, "name": "Java"}'
curl -X PUT http://localhost:5984/skill/5 -d '{"id": 5, "name": "Functional"}'
curl -X PUT http://localhost:5984/skill/6 -d '{"id": 6, "name": "iOS"}'
curl -X PUT http://localhost:5984/skill/7 -d '{"id": 7, "name": "Android"}'

curl -X DELETE http://localhost:5984/user
curl -X PUT http://localhost:5984/user

curl -X DELETE http://localhost:5984/location
curl -X PUT http://localhost:5984/location

curl -X PUT http://localhost:5984/location/1 -d '{"id": 1, "name": "St Louis"}'
curl -X PUT http://localhost:5984/location/2 -d '{"id": 2, "name": "SFB"}'
curl -X PUT http://localhost:5984/location/3 -d '{"id": 3, "name": "Denver"}'
curl -X PUT http://localhost:5984/location/4 -d '{"id": 4, "name": "Springfield"}'
curl -X PUT http://localhost:5984/location/5 -d '{"id": 5, "name": "NYC"}'
curl -X PUT http://localhost:5984/location/6 -d '{"id": 6, "name": "London"}'