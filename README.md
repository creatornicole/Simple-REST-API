# Simple-REST-API

Represents simple REST-API with nodejs and MySQL based on the assignment given by Mario Oettler in the Bachelor course "Blockchain und verteilte Systeme" at the University of Applied Sciences Mittweida.

## REST-API
| Nr. | URI | HTTP-Methode | Body | Outcome |
|-----|-----|------------------|-------|------------|
| 1 | user | GET | empty | outputs list of users |
| 2 | user  | POST | JSON String | create new user, identification with user-ID |
| 3 | user/:userId | DELETE | empty | delete existing user, identification with user-ID |
| 4 | user/:userId | GET | empty | show details of user, identification with user-ID |
| 5 | user/:userId | PUT | JSON String | update data of user, identification with user-ID |

