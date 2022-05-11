let title = document.getElementById("taskTitle");
let detail = document.getElementById("taskDetails");
let form = document.getElementById("form");
let add = document.getElementById("push");
let msg = document.getElementById("msg");
let editButton;
let deleteButton;
let isEdit = false;
let editIndex = null;
let data = [];
let id = 0;

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
        if(!isEdit){
            acceptData();
        }else{
            updateData();
        }
       
      }
  }

  let updateData = () => {
      let newData = {
        title  : title.value,
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

      data.push({
          title  : title.value,
          detail: detail.value,
      })    
      localStorage.setItem("data", JSON.stringify(data));
      title.value ='';
      detail.value = '';
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
    isEdit = true;
    push.innerHTML ="Edit";
    editIndex = key;
    title.value = data[key].title;
    detail.value = data[key].detail;
}



function deleteTask(key){
   
data.splice(key,1);

localStorage.setItem("data", JSON.stringify(data));

if(data.length != 0){
    let list ='';
    for(var currKey in data ){
        list +=  `<li><label>${data[currKey].title}</label><label>${data[currKey].detail}</label><button class="edit" onClick="editTask(${currKey})" id="edit">Edit</button><button id="delete" onClick="deleteTask(${currKey})" class="delete">Delete</button></li>`
        document.getElementById('incomplete-tasks').innerHTML = list; 
    }
}else {
    list = ''
    document.getElementById('incomplete-tasks').innerHTML = list; 
}

}

