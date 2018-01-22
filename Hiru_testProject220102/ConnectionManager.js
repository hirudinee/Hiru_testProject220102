module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["sample"] = {
        host: process.env.EndPoint_sample,
        port: 3306,
        user: "test",
        password: "12345678",
        database: "test",
    };
    
    };