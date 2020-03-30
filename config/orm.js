const connection = require("./connection.js")

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        let queryString = "SELECT * FROM ?? WHERE?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString [whatToSelect, table, orderCol], function(err, result){
            if (err) throw err;
            cb(result)
        })
    },
    updateOne: function(){
        
    }

}


module.exports = orm;