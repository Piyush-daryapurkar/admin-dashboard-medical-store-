//show data in table

async function  fetch_data(){
    let sdata=await fetch("http://localhost:3000/studant");
    let res = await sdata.json();
    

    let data_store = res.map((e)=>`
    <tr>

        <td>${e.cname}</td>
        <td>${e.contact}</td>
         <td>${e.mname}</td>
        <td>${e.quantity}</td>
        <td>${e.batch}</td>
        <td>${e.price}</td>
        <td>${e.buymode}</td>
        <td>${e.id}</td>
        <td><i class="fa-solid fa-trash" onclick="mydelete('${e.id}')"></i></td>
        <td><i class="fa-solid fa-pen-to-square" onclick="myedit('${e.id}')"></i></td>

    </tr>
    `).join("")
    document.getElementById('showdata').innerHTML=data_store;
}
fetch_data();

    
// Insert Data in Table  insdata.html
function insData() {
  let cname1=document.getElementById('cname').value;
  let contact1=document.getElementById('contact').value;
  let mname1=document.getElementById('mname').value;
  let quantity1=document.getElementById('quantity').value;
  let batch1=document.getElementById('batch').value;
  let price1=document.getElementById('price').value;
  let buymode1=document.getElementById('buymode').value;
  


  let frmdata = {
  cname: cname1,
  contact:contact1,
  mname:mname1,
  quantity: quantity1,
  batch:batch1,
  price: price1,
  buymode: buymode1,
  };

  fetch("http://localhost:3000/studant", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(frmdata),
  })
    .then((re) => alert("Data Updated in table..."))
   
}



// TO DELETE

function mydelete(id) {
  fetch(`http://localhost:3000/studant/${id}`, {
    method: 'DELETE'
  })
  .then((r) => alert("Deleted........"));
}

// to edit

async function myedit(id){
    
    let r=await fetch(`http://localhost:3000/studant/${id}`)
    let d=await r.json()

    let frm=`
 
    <form action="" class="form" onsubmit="return finalupdate('${d.id}')">
                    <h1>Edit Data</h1>

                    <label for="cname1">BuyerName</label>
                    <input type="text" value="${d.cname}" id="cname1" ><br>

                    
                    <label for="contact1">contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.contact}" id="contact1" ><br>

                    <label for="mname1">Medicine&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.mname}" id="mname1" ><br>

                    <label for="quantity1">Quantity&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.quantity}" id="quantity1" ><br>


                    <label for="oid1" read>OrderId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.id}" id="oid1" readonly><br>

                    <label for="batch1">batch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.batch}" id="batch1" ><br>


                    <label for="price1">Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" value="${d.price}" id="price1" ><br>


                    <label for="buymode1">Buymode&nbsp;&nbsp;</label>
                    <select value="${d.buymode}" id="buymode1">
                    <option>online</option>
                    <option>online</option>

                    <select>
                    



                    <div class="btn">
                    <button type="submit">Update Data</button>
                    </div>
                </form>

    `
    document.getElementById('editform').innerHTML=frm
}


function finalupdate(id){

  

    mname2=document.getElementById("mname1").value
    quantity2=document.getElementById("quantity1").value
    price2=document.getElementById("price1").value
    cname2=document.getElementById("cname1").value
    buymode2=document.getElementById("buymode1").value
    batch2=document.getElementById("batch1").value
    contact2=document.getElementById("contact1").value



      let frm={
        cname: cname2,
        contact:contact2,
        mname:mname2,
        quantity: quantity2,
        batch:batch2,
        price: price2,
        buymode: buymode2,
    }

    fetch(`http://localhost:3000/studant/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(frm)
    })
    .then(r=>alert("data Updated....."))

}