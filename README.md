# web_components

# Setting up a local json server

1) Install the json-server => npm install -g json-server

2) Create a .json file and save the data in it.

3) Run the server => json-server --watch ${filename}.json

4) Data can be accessible on http://localhost:3000/data

# JWT token

Hardcoding the token-
=> Visit 'https://jwt.io/' and create your own JWT token.

=> Set the token in session/local storage.

=> Retrieve the token from session/local storage and sent it in the headers of the request at the time of sending the request. 
