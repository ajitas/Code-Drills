var mysql = require("mysql");

var connection = mysql.createConnection({
  // Your connection information here
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "stockDB"
});

// Connect to the database and then run the function to display the
// optimal buy and sell dates
connection.connect(function(err) {
  if (err) throw err;
  getStocks();
});


// --------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------






// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {


  // -------------------- Define Query Here --------------------
  var query = "select stock_date,stock_open,stock_high,stock_low from stock";
  // -----------------------------------------------------------


  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------
    if(err) throw err;

    var currentLow = res[0].stock_low;
    var currentHigh = res[1].stock_high;
    var maxProfit = currentHigh - currentLow;
    var buyDateIndex = 0;
    var sellDateIndex = 1;
    var sellDate = sellDateIndex;
    var buyDate = buyDateIndex;

    for(var i =0;i<res.length-1;i++){
      if(currentLow >= res[i].stock_low){
        currentLow = res[i].stock_low;
        currentHigh = res[i+1].stock_high;
        buyDateIndex = i;
        sellDateIndex = i+1;
      }
      if(currentHigh <= res[i+1].stock_high){
        currentHigh = res[i+1].stock_high;
        sellDateIndex = i+1;
      }
      if(currentHigh-currentLow>=maxProfit){
        maxProfit = currentHigh-currentLow;
        sellDate = sellDateIndex;
        buyDate = buyDateIndex;
      }
    }
      console.log("Max Profit: "+ maxProfit.toFixed(2));
      console.log("Buy Date: "+ res[buyDate].stock_date);
      console.log("Sell Date: "+ res[sellDate].stock_date);


    // --------------------- End Code Area --------------------
    connection.end();
  })
}
