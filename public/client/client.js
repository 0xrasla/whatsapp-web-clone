let socket = io();
let username = "";

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
    const msg = document.createElement("p");
    msg.className = "chat";
    if (socket.id != d.id) {
        msg.classList.add("left");
        msg.innerHTML = `<span>${d.name}</span>` + " " + d.message;
    } else {
        msg.classList.add("right");
        msg.innerHTML = d.message;
    }
    socket.emit("canceltyping");
    document.querySelector(".msg").appendChild(msg);
    document.querySelector("input").value = "";
})

socket.on("newconn", (newUSer) => {
    const msg = document.createElement("p");
    msg.className = "joined";
    msg.innerText = newUSer + "  joined the chat...";
    document.querySelector(".msg").appendChild(msg);
})

socket.on("usertype", (e) => {
    if (socket.id != e.id) {
        const msg = document.createElement("div");
        msg.className = "chat-bubble";
        if (socket.id != e.id) {
            msg.classList.add("left");
        } else {
            msg.classList.add("right");
        }
        msg.innerHTML = `<div class="typing">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <span>${e.name}</span>
                        </div>`;
        document.querySelector(".msg").appendChild(msg);
    }
})

socket.on("removetypingwidget", () => {
    const chatbubble = document.querySelector(".chat-bubble");
    if (chatbubble) document.querySelector(".msg").removeChild(chatbubble);
    showtyping = true;
})