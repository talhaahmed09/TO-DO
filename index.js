const title = document.getElementById("taskTitle");
const detail = document.getElementById("taskDetails");
const form = document.getElementById("form");
const add = document.getElementById("push");
const msg = document.getElementById("msg");
let editButton;
let deleteButton;
let isEdit = false;
let editIndex = null;
let data = [];
let id = 0;
idKey = null;

form.addEventListener("submit",(e) => {
    
    e.preventDefault();
    formValidation();
})

  function formValidation() {
    if(!title.value || detail.value === '' ){
        console.log("failure");
    msg.innerHTML = "Task cannot be blank";
    }else {
        console.log("success");
        msg.innerHTML = "";
        if(!isEdit){
            acceptData();
        }else{
            updateData();
        }
       
      }
  }

  let updateData = () => {
      debugger;
      let newData = {
        id:idKey,
        title : title.value,
        detail: detail.value,
      }
      data[editIndex] = newData;
      localStorage.setItem("data", JSON.stringify(data));
      title.value ='';
      detail.value = '';
      isEdit = false;
      push.innerHTML ="Add";
      updateList();
  }

  let acceptData = () => {
    debugger
      data.push({
          id:id,
          title  : title.value,
          detail: detail.value,
      });
      id++;
      localStorage.setItem("data", JSON.stringify(data));
      title.value ='';
      detail.value = '';
      updateList();
  }

  function updateList(){
      let list ='';
      for(var currKey in data ){
        list +=  `<li><label>${data[currKey].title}</label><label>${data[currKey].detail}</label><button class="edit" onClick="editTask(${data[currKey].id})" id="edit">Edit</button><button id="delete" onClick="deleteTask(${data[currKey].id})" class="delete">Delete</button></li>`
        document.getElementById('incomplete-tasks').innerHTML = list; 
    }
    
}

function editTask(key){
    debugger;
    isEdit = true;
    push.innerHTML ="Edit";
    idKey = key;
    editIndex = data.findIndex(data => data.id == key)
    title.value = data[key].title;
    detail.value = data[key].detail;
}



function deleteTask(key){
   
data.splice(key,1);

localStorage.setItem("data", JSON.stringify(data));

if(data.length){
   updateList();
}else {
    list = ''
    document.getElementById('incomplete-tasks').innerHTML = list; 
}

}



