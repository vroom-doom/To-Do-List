var listLength = 5;

function select(part){  // Function to tick off a task
    console.log(part);
    var id = "i" + part.toString();
    var elem = document.getElementById(id);
    var text = elem.innerText;
    console.log(id);
    elem.classList.toggle("list-done");
    elem.innerHTML = '<input type="checkbox" checked="true" onclick="onClick(this.id)" id="'+part+'"><s>'+text+'</s><br>';
    console.log(elem.classList);
}

function deselect(part){    // Function to untick a task
    console.log(part);
    var id = "i" + part.toString();
    var elem = document.getElementById(id);
    var text = elem.innerText;
    console.log(id);
    elem.classList.remove("list-done");
    elem.innerHTML = '<input type="checkbox" onclick="onClick(this.id)" id="'+part+'">'+text+'<br>';
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

function addContent(text){
    listLength += 1;
    var text = document.getElementById("add").value;
    if (text != null && text != ""){
        document.getElementById("list-container").innerHTML+= '<li class="item" id="i'+listLength+'"><input type="checkbox" onclick="onClick(this.id)" id="'+listLength+'">'+text+'</li><br>';
    }
    
}





