let data={
    host:"localhost",
    user:"Parsh",
    password:"Parsh",
    database:"Pankaj",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(data);
let resourceId=1;
let resourcename="watch";
let status=true;
con.query("insert into resource (resourceId,resourcename,status) values (?,?,?)",[resourceId,resourcename,status],(err,res)=>{
    if(err){
        console.log(Error );
    }else{
        console.log("Rows Inserted");
    }
});