/* * Using unirest
* This is another method using the unirest library 
* this below code Get all data
* run it using the following commande: node app.js
*/

const unirest = require("unirest");

var Request = unirest.get("http://localhost:3000/recipes");

Request.headers({
  "cache-control": "no-cache",
}).end((res) => {
  if (res.error) throw new Error(res.error);
  console.log(res.body);
});
