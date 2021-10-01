import * as Utils from "./utils.js";
let socket = io();
let username = "";
let usercount = '';

socket.on("newconn", (n) => { username = n; })

document.querySelector("button").addEventListener("click", () => {
    socket.emit("send", document.querySelector("input").value);
})
let showtyping = true;

document.querySelector("input").addEventListener("keypress", () => {
    if (showtyping) socket.emit("typing");
    showtyping = false;
})

document.querySelector("input").addEventListener("keyup", () => {
    setTimeout(() => {
        socket.emit("canceltyping");
        showtyping = true;
    }, 2000)
})

socket.on("message", (d) => {
    const newMessage = Utils.default[2];
    newMessage(d, socket);
})

socket.on("newconn", (newUSer) => {
    const newconn = Utils.default[0];
    newconn(newUSer, usercount);
})

socket.on("usertype", (e) => {
    const typing = Utils.default[1];
    typing(socket, e)
})

socket.on("removetypingwidget", () => {
    const chatbubble = document.querySelector(".chat-bubble");
    if (chatbubble) document.querySelector(".msg").removeChild(chatbubble);
    showtyping = true;
})

// leaving
document.querySelector(".leave").addEventListener("click", () => {
    socket.emit("leave", username);
    document.querySelector("h1").innerText = "Online : " + usercount;
})

socket.on("personleaves", (e) => {
    const msg = document.createElement("p");
    msg.className = "joined";
    msg.innerText = e.name + "  leaved the chat...";
    document.querySelector("h1").innerText = "Online : " + e.count;
    document.querySelector(".msg").appendChild(msg);
    let refresh = Utils.default[3]
    refresh(e)
    if (e.id == socket.id) {
        let baseurl = String(window.location).split("/")
        window.location.replace(baseurl[0] + "/" + baseurl[1])
    }
})
