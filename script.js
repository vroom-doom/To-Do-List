var listLength = 1;

function select(part){  // Function to tick off a task
    console.log(part);
    var id = "i" + part.toString();
    var elem = document.getElementById(id);
    var text = document.getElementById("l"+part).textContent;
    console.log(id);
    elem.classList.toggle("list-done");
    elem.innerHTML = '<input type="checkbox" checked="true" id="'+part+'" onclick="onClick(this.id)"><label id="l'+part+'"><s>'+text+'</s></label><button value="1" onclick="deleteTask('+part+')">Delete</button>';
    console.log(elem.classList);
}

function deselect(part){    // Function to untick a task
    console.log(part);
    var id = "i" + part.toString();
    var elem = document.getElementById(id);
    var text = document.getElementById("l"+part).textContent;
    console.log(id);
    elem.classList.remove("list-done");
    elem.innerHTML = '<input type="checkbox" id="'+part+'" onclick="onClick(this.id)"><label id="l'+part+'">'+text+'</label><button value="1" onclick="deleteTask('+part+')">Delete</button>';
    console.log(elem.classList);
}

function onClick(clicked_id){   // Function to add basic tick / untick functionality
    var task = document.getElementById(clicked_id);
    if (task.checked === true){
        select(clicked_id);
        console.log(task.checked);
    }else{
        console.log("Else called");
        deselect(clicked_id);
        console.log(task.checked);
    }
}

function addContent(){  // Function to add a new item
    var key = 'i'+listLength;
    while (localStorage.getItem(key) !== null){
        listLength += 1;
        key = 'i'+listLength;
    }
    var text = document.getElementById("add").value;
    console.log(key + ', ' + text);
    if (text != null && text != ""){
        localStorage.setItem(key, text);
        document.getElementById("list-container").innerHTML += `<li class="item" id="i${listLength}"><input type="checkbox" id="${listLength}" onclick="onClick(this.id)"><label id="l${listLength}">${text}</label><button value="${listLength}" onclick="deleteTask(${listLength})">Delete</button></li>`;
    }
    listLength += 1;
    document.getElementById("add").value = "";
}

function writeContent(text){  // Function to write local storage
    if (text != null && text != ""){
        document.getElementById("list-container").innerHTML += `<li class="item" id="i${listLength}"><input type="checkbox" id="${listLength}" onclick="onClick(this.id)"><label id="l${listLength}">${text}</label><button value="${listLength}" onclick="deleteTask(${listLength})">Delete</button></li>`;
        listLength += 1;
    }
}

function deleteTask(value){ // Function to remove item
    var parent = document.getElementById("list-container");
    var child = document.getElementById("i"+value);
    var key = 'i'+value;
    localStorage.removeItem(key);
    var x = localStorage.getItem("del");
    x = Number(x); 
    console.log(`Deleted item: ${key}`);
    console.log(`Deleted count: ${x}`);
    localStorage.setItem("del", Number(x+1));
    parent.removeChild(child);
}

function clearAll(){
    localStorage.clear();
    location.reload();
}

window.addEventListener("load", function () {
    console.log("Page has been loaded or reloaded");
    var j;
    var count = 1;
    console.log(localStorage.length);
    var x = localStorage.getItem("del");
    x = Number(x);
    if (localStorage.length !== 0){
        for (var i=0; i<localStorage.length+x; i++){
            j = i+1;
            var key = 'i'+j;
            var newKey = 'i'+count;
            var text = localStorage.getItem(key);
            if (text !== null){
                writeContent(text);
                console.log(key + ', ' + text);
                localStorage.removeItem(key);
                localStorage.setItem(newKey, text);
                count += 1;
            } else {

            }
        }
        localStorage.setItem("del", 0);
    }
});

document.getElementById("add").addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        addContent();
    }
})





