employee={}
function add(){
    if(inputid.value && inputname.value && inputdesig.value && inputsalary.value){
        employee.id=inputid.value
        employee.name=inputname.value
        employee.designation=inputdesig.value
        employee.salary=inputsalary.value
        console.log(employee);
        // permenantly store employee
        localStorage.setItem("employee",JSON.stringify(employee))
        // JSON.stringify --is used to convert data into string 
        // redirect to showEmp.html
        window.location="showEmp.html"
    }
    else{
        alert("please fill all the details")
    }
}

// get data from local storage
if(localStorage.getItem("employee")){
    var displayData=JSON.parse(localStorage.getItem("employee"))
    // JSON.parse--is used to convert normal form
    console.log(displayData);
    display.innerHTML=`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${displayData.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">ID:${displayData.id}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">designation:${displayData.designation}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">salary:${displayData.salary}</h6>

  </div>
</div>
    `
}else{
    display.innerHTML =`<h1 class="text-center text-danger"> Nothing to display</h1>`
}

function back(){
     // redirect to addEmp.html
     window.location="addEmp.html"
}