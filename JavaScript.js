// Tabs

function openCity(evt, ItemType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ItemType).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //------------------------------


  //Total number of products in Cart working
  var allItems = document.getElementsByClassName("add-to-cart");
  console.log(allItems);

  for(let i=0; i< allItems.length; i++)
  {
    allItems[i].addEventListener('click', ()=> {        //()=> creates a function 
        Update_Products(ListsOfItems[i]);   
        totalAmount(ListsOfItems[i]);                     //calling a function and passing parameter to give the details to functions
    });
  }

  function Update_Products(chiz)
  {
    //if incase useer refreshes the page mistakenly
    let get_ItemNumber = localStorage.getItem("ItemNumber");
    get_ItemNumber = parseInt(get_ItemNumber);   //converts into int from string

    if(get_ItemNumber){
      localStorage.setItem('ItemNumber', get_ItemNumber + 1);
      document.getElementById("totalProducts").innerHTML = get_ItemNumber+1;
    }
    else{
      localStorage.setItem('ItemNumber',  1);
      document.getElementById("totalProducts").innerHTML = 1;
    }
    setItems(chiz)
  }
  
  function Show_UpdatedProducts(){      //this shows total no after the page reloads
    let get_ItemNumber = localStorage.getItem("ItemNumber");
    get_ItemNumber = parseInt(get_ItemNumber);    

    if(get_ItemNumber){
      document.getElementById("totalProducts").innerHTML = get_ItemNumber;
    }
    else{
      document.getElementById("totalProducts").innerHTML = 0;
    }
  }

  Show_UpdatedProducts();

  
  
//----------------------------


let ListsOfItems = [

  {
    name: "Flate White",
    tag: "flatewhite",
    price: 180,
    inCart: 0
  },

  {
    name: "Cappuccino",
    tag: "cappuccino",
    price: 210,
    inCart: 0
  },

  {
    name: "Horchata Latte",
    tag: "cappuccino",
    price: 220,
    inCart: 0
  },

  {
    name: "Dalgona Coffee",
    tag: "dalgona",
    price: 225,
    inCart: 0
  },

  {
    name: "Iced Latte",
    tag: "icedlatte",
    price: 200,
    inCart: 0
  },

  {
    name: "Frozen Caramel Macchiato",
    tag: "caramel",
    price: 230,
    inCart: 0
  },

  {
    name: "Cold Brew Coffee",
    tag: "brew",
    price: 190,
    inCart: 0
  },

  {
    name: "Chocolate and Coffee truffle pots",
    tag: "truffle",
    price: 225,
    inCart: 0
  },

  {
    name: "Spongy Plain Cake",
    tag: "spongy",
    price: 100,
    inCart: 0
  },

  {
    name: "Cookies",
    tag: "cookies",
    price: 80,
    inCart: 0
  },

  {
    name: "Mini Pizza",
    tag: "minipizza",
    price: 190,
    inCart: 0
  },

  {
    name: "Sandwich",
    tag: "sandwich",
    price: 210,
    inCart: 0
  }
]


function setItems(chiz) {
    //stroring item's details in local storage
    let Pcart = localStorage.getItem("P_details");
    Pcart = JSON.parse(Pcart);

    if(Pcart != null){
      if(Pcart[chiz.tag] == undefined){
          Pcart = {
            ...Pcart,   //items already added in cart, will be appended.
            [chiz.tag] : chiz 
          }
      }
      Pcart[chiz.tag].inCart += 1;
    }
      else{
        chiz.inCart = 1;
        Pcart = {
          [chiz.tag] : chiz
        }
    }

    localStorage.setItem("P_details",JSON.stringify(Pcart));
}


//----------------------------

function totalAmount(chiz){
  let total = localStorage.getItem("Amount");
  total = parseInt(total);

  if(isNaN(total)){
    total = chiz.price;
  }
  else{
    total = total + chiz.price;
  }

  localStorage.setItem("Amount", total);

}

//-----------------------------

function DisplayItems(){
  var getproducts = localStorage.getItem("P_details");
  getproducts = JSON.parse(getproducts);

  var store = document.getElementById("products");  

  if(getproducts && store ){
    store.innerHTML = "";
    Object.values(getproducts).map(extractDetails => {store.innerHTML += `      
         <tr> <td class="jsH1">${extractDetails.name}</td> 
          <td class="jsH1">${extractDetails.price}</td> 
          <td class="jsH1">${extractDetails.inCart}</td> 
          <td class="jsH1">${extractDetails.inCart * extractDetails.price}</td></tr>
    `} );

    var ST= localStorage.getItem("Amount");
    ST = parseInt(ST);
    document.getElementById("subtotal").innerHTML += `
        <h1> Total Amount = <br>Rs.${ST}.00/- </h1> `
   }
   
}

DisplayItems();

//------------------------------
//deleting items
function deleteItems() {
  localStorage.clear();
  document.getElementById("products").innerHTML = " ";
  document.getElementById("subtotal").innerHTML = `
  <h1> Total Amount = <br>Rs.0.00/- </h1> `
}

//---------------------------------


function showAlert() {
  if(document.getElementById("products").innerHTML = " "){
  alert ("Hello world!");
  }
}


//slider.......
function openNav() {
//   if(typeof(localStorage.getItem("Amount"))=='undefined'){
//     alert('no');
// };

  document.getElementById("mySidenav").style.width = "40%";

  var x = window.matchMedia("(max-width: 540px)")
  if (x.matches) { // If media query matches
      document.getElementById("mySidenav").style.width = "85%";
  }
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


