var todo = [];
var completedtodo = [];

function display(){
    var list = ""
    todo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" onclick="check(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="edit(${index})">Edit</button
    ><button class="delete" onclick="del(${index})">Delete</button>
    </li>`;
    // console.log(index)
    list += item;
});
document.getElementById("incomplete-tasks").innerHTML =list;
};

function add(){
    var item  = document.getElementById("new-task").value;
    todo.push(item)
    console.log(todo)
    display();
};

function edit(index){
    var listitem = todo[index];
    document.getElementById("todo").value=index;
    var x = document.getElementById("todo").classList.add('todo');
    document.getElementById("new-task").value=listitem;
    document.getElementById('addbtn').style.display = 'none';
    document.getElementById("updatebtn").style = display;
};

function update(){
    var item = document.getElementById("new-task").value;
    var index = document.getElementById("todo").value;
    var x = document.getElementById("todo").className;
    console.log(x);
    if(x == "todo"){
        todo[index]=item;
        display();
        document.getElementById("todo").className="";
    }
    else{
        completedtodo[index]=item;
        displaycompleted();
        document.getElementById("todo").className="";
    }
    
    
    document.getElementById('addbtn').style = display;
    document.getElementById("updatebtn").style.display = 'none';
}

function del(index){
    todo.splice(index,1);
    display();
};

function check(index){
    var value = todo[index];
    completedtodo.push(value);
    todo.splice(index,1);
    displaycompleted();
    display();
};

// completed task
function displaycompleted(){
    var list = ""
    completedtodo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" onclick="completedcheck(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="completededit(${index})">Edit</button
    ><button class="delete" onclick="completeddel(${index})">Delete</button>
    </li>`;
    console.log(index)
    list += item;
});

document.getElementById("completed-tasks").innerHTML =list;
};

function completededit(index){
    var listitem = completedtodo[index];
    document.getElementById("todo").value=index;
    document.getElementById("new-task").value=listitem;
    var x = document.getElementById("todo").classList.add('completedtodo')
    document.getElementById('addbtn').style.display = 'none';
    document.getElementById("updatebtn").style = display;
};
function completeddel(index){
    completedtodo.splice(index,1);
    displaycomp();
};

function completedcheck(index){
    var value = completedtodo[index];
    todo.push(value);
    completedtodo.splice(index,1);
    displaycompleted();
    display();
};


