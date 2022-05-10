let title = document.getElementById("taskTitle");
let detail = document.getElementById("taskDetails");
let form = document.getElementById("form");
let add = document.getElementById("add");
let msg = document.getElementById("msg");
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
          detail: detail.value
      })    
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data)
  }