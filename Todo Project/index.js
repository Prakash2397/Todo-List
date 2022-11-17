let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");

let foodContainer = document.getElementById("food-container");



//alert.style.display='none';
function createAlertViaDom(mes) {
  /*<div class="alret">
   <strong>✅ Succesfully</strong> Updated
  </div>*/
  let main = document.getElementById("main");

  const div = document.createElement("div");
  div.classList = "alert";
  const textnode = (div.createTextNode = `${mes}`);
  div.append(textnode);

  main.prepend(div);

  console.log(div);
  console.log(textnode);
}

inputBtn.addEventListener("click", add);
inputFood.addEventListener("focus", remo);
function remo() {
  const delee = document.querySelector(".alert");
  delee.remove();
}

function add() {
  let emp = inputFood.value;
  if (emp == "") {
   
    createAlertViaDom("Pls fill something..");
    const colo = document.querySelector(".alert");

    colo.style.backgroundColor = "red";
    
  } else {
    
    const li = document.createElement("li");

    const text = document.createTextNode(inputFood.value);
    li.classList = "food-item";
    li.append(text);

    //alret
    createAlertViaDom("food is updated!");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList = "deletebtn";
    const deltext = document.createTextNode("Delete");
    deleteBtn.append(deltext);
    li.append(deleteBtn);

    // deleteBtn.style.cssText = `
    // margin-left:600px;
    // margin-top:5px
    // margin-bottom:5px;
    // width:100px;
  
    // color: #f2f2f2;
    // font-weight: bold;
    // cursor:pointer;
    // padding:5px;
    // border-radius:5px;
    
    // `;
    deleteBtn.addEventListener("click", del);
    // deleteBtn.addEventListener("mouseenter", () =>{
    //     deleteBtn.style.background="red";

    // });
    // deleteBtn.addEventListener("mouseleave", () =>{
    //     deleteBtn.style.background="royalblue";

    // });

    function del() {
      foodContainer.removeChild(li);
      const delee = document.querySelector(".alert");
      delee.remove();
      createAlertViaDom("sucessfully Deleted");
      const colo = document.querySelector(".alert");

      colo.style.backgroundColor = "red";
    }

    foodContainer.append(li);
    inputFood.value = "";
  }
}
