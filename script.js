var listLength = 5;

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

function addContent(text){  // Function to add a new item
    listLength += 1;
    var text = document.getElementById("add").value;
    if (text != null && text != ""){
        document.getElementById("list-container").innerHTML+= '<li class="item" id="i'+listLength+'"><input type="checkbox" id="'+listLength+'" onclick="onClick(this.id)"><label id="l'+listLength+'">'+text+'</label><button value="1" onclick="deleteTask('+listLength+')">Delete</button><br></li>';
    }
    
}

function deleteTask(value){ // Function to remove item
    var parent = document.getElementById("list-container");
    var child = document.getElementById("i"+value);
    parent.removeChild(child);
}






