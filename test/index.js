function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj={
        name,email,phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showobjectonscreen(obj); //FUNCTION CALL WITH OBJ PASSED AS ARGUEMENT
    const input = document.getElementsByClassName('aaru');
    for(let i=0;i<input.length;i++){
        input[i].value="";
    }
}

function showobjectonscreen(obj){
    event.preventDefault();
    const parentele = document.getElementById('userList');
 const childele = document.createElement('li');
  childele.textContent = obj.name+ '---' +obj.email + '---' +obj.phone;

 const deletebtn = document.createElement('input');
 deletebtn.type = "button";
 deletebtn.value = "Delete-expense";
 deletebtn.onclick = ()=>{
 localStorage.removeItem(obj.email);
 parentele.removeChild(childele);
 }
 const editbtn = document.createElement('input');
 editbtn.type = "button";
 editbtn.value = "Edit-expense";
 editbtn.style.marginLeft = '5px';
 editbtn.onclick = ()=>{
  const formy = document.querySelector('form');
  formy.username.value = obj.name;
  formy.email.value = obj.email;
  formy.phone.value = obj.phone



localStorage.removeItem(obj.email);
 parentele.removeChild(childele);
 
 }
 
childele.appendChild(deletebtn);
childele.appendChild(editbtn);
parentele.appendChild(childele);
}