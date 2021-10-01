function newUserArrived(newUSer, usercount) {
    const msg = document.createElement("p");
    msg.className = "joined";
    document.querySelector("h1").innerText = "Online : " + newUSer.count
    usercount = newUSer.count;
    refreshUserList(newUSer)
    msg.innerText = newUSer.name + "  joined the chat...";
    document.querySelector(".msg").appendChild(msg);
}

function refreshUserList(newUSer) {
    let chatdiv = document.createElement("div")
    chatdiv.className = "chat-list";
    for (let i of Object.values(newUSer.users)) {
        if (i != "") {
            let el = document.createElement("div")
            el.className = "chat-member";
            el.innerText = i;
            chatdiv.appendChild(el)
        }
    }

    document.querySelector(".container").replaceChild(chatdiv, document.querySelector(".chat-list"))
}

function userTyping(socket, e) {
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
}

function newMessage(d, socket) {
    const msg = document.createElement("p");
    msg.className = "chat";
    let current_time = new Date();
    if (socket.id != d.id) {
        msg.classList.add("left");
        msg.innerHTML = `<div><span class="name">${d.name}</span> </div>` + " " + d.message + " " + ` <div class="time">${current_time.getHours() + " : " + current_time.getMinutes()} ${current_time.getHours > 12 ? "AM" : "PM"}</div>`;
    } else {
        msg.classList.add("right");
        msg.innerHTML = d.message + ` <div class="time">${current_time.getHours() + " : " + current_time.getMinutes()} ${current_time.getHours > 12 ? "AM" : "PM"}</div>`;
    }
    socket.emit("canceltyping");
    document.querySelector(".msg").appendChild(msg);
    document.querySelector("input").value = "";
}

export default [newUserArrived, userTyping, newMessage, refreshUserList]