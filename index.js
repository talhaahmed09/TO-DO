let title = document.getElementById("taskTitle");
let detail = document.getElementById("taskDetails");
let form = document.getElementById("form");
let add = document.getElementById("add");
let msg = document.getElementById("msg");
let editButton;
let deleteButton;
let data = [];

form.addEventListener("submit",(e) => {
    
    e.preventDefault();
    formValidation();
})

  function formValidation() {
    if(title.value === '' || detail.value === ''){
        console.log("failure");
    msg.innerHTML = "Task cannot be blank";
    }else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
      }
  }

  let acceptData = () => {
      data.push({
          title  : title.value,
          detail: detail.value,
      })    
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data);
      updateList();
  }

  function updateList(){
      let list ='';
      for(var currKey in data ){
        list +=  `<li><label>${data[currKey].title}</label><label>${data[currKey].detail}</label><button class="edit" onClick="editTask(${currKey})" id="edit">Edit</button><button id="delete" onClick="deleteTask(${currKey})" class="delete">Delete</button></li>`
        document.getElementById('incomplete-tasks').innerHTML = list; 
    }
    
}

function editTask(key){
console.log(key)
}

function deleteTask(key){
data.splice(key,1); 
for(var currKey in data ){
    let list ='';
    list +=  `<li><label>${data[currKey].title}</label><label>${data[currKey].detail}</label><button class="edit" onClick="editTask(${currKey})" id="edit">Edit</button><button id="delete" onClick="deleteTask(${currKey})" class="delete">Delete</button></li>`
    document.getElementById('incomplete-tasks').innerHTML = list; 
}
}

