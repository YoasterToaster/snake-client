const net = require("net");
const handleUserInput = require('./input.js');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // console.log("Successfully connected to game server");
    conn.write("Name: BOT");
  });

    let count = 1;
    // handleUserInput(conn);
    setInterval(() => {
    
        
      if (count <= 5){
        conn.write("Move: up");
        count++;
      } else if (count > 5 && count <= 10){
        conn.write("Move: right");
        count++;
      } else if (count > 10 && count <= 15){
        conn.write("Move: down");
        count++;
      } else if (count > 15 && count <= 20){
        conn.write("Move: left");
        count++;
      } else if (count > 20 && count < 25){
        count++
      } else {
        conn.write("Say: Hisssssssssssssssss");
        count = 1;
      }
}, 500);

  conn.on("data", (data) => {
    console.log(data);
  });

  // conn.on("event name", functionThatDoesSomething);

  return conn;
};

module.exports = connect;