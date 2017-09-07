/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name:'Library West'}, function(err, user){
    if(err) throw err;
    console.log(user);
   })
};
var removeCable = function() {
  Listing.find({code: 'CABL'}, function(err, user){
    if (err) throw err;

    user.remove(function(err){
      if (err) throw err;
    });

  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
Listing.findOneAndUpdate({code:'PHL'}, {address: '432 Newell Dr, Gainesville, FL 32611, United States'},
  funtion(err, user){
    if (err) throw err;
    console.log(user);
  });

  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, users){
    if (err) throw err;
    console.log(users);
  })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
