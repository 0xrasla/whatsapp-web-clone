const express = require("express")
app = express()

const http = require("http").createServer(app)
const io = require("socket.io")(http)

let users = {}
let room, username = "";
let onlinecount = 0;

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: false
}))
app.set("view engine", 'ejs');

app.get("/", (req, res) => {
    res.render("home")
})

app.post("/chat", (req, res) => {
    room = req.body.roomname;
    username = req.body.name;
    res.render("chat");
})


io.on("connection", (socket) => {
    socket.join(room);
    onlinecount++;
    users[socket.id] = username;
    io.to(room).emit("newconn", { name: users[socket.id], count: onlinecount, users: users })

    socket.on('send', (e) => {
        io.to(room).emit("message", {
            message: e,
            name: users[socket.id],
            id: socket.id
        })
    })

    socket.on("typing", () => {
        io.to(room).emit("usertype", {
            name: users[socket.id],
            id: socket.id
        })
    })

    socket.on("canceltyping", () => {
        io.to(room).emit("removetypingwidget");
    })

    socket.on("leave", (e) => {
        onlinecount--;
        let leavedOne = users[socket.id]
        delete users[socket.id]
        io.to(room).emit("personleaves", { name: leavedOne, count: onlinecount, users: users, id: socket.id });
        socket.leave(room);
    })

    socket.on('disconnect', function () {
        delete users[socket.id]
        onlinecount--;
    });

})

http.listen("3000", () => { console.log("Server Started...."); })