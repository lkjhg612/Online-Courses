// //logout
// const formlogout = document.forms["log-out"];
// const btnlog = document.querySelectorAll('.log-out');
// const xacnhan = document.querySelector('.xacnhan');
// const  btnCloseXN = document.querySelector('.xacnhan .nav-closee');



// if(btnCloseXN != null){
// btnCloseXN.onclick = function(){
//     xacnhan.classList.remove("openXN")
// }
// }

// if(btnlog != null){
// btnlog.forEach(ele => {
//     ele.onclick = function(){
   
//          xacnhan.classList.add("openXN")
//     }
// })
// }


// //form editPayCourses
// const btnED = document.querySelectorAll(".btnEditUS")
// const modalED = document.querySelector(".editUS");
 
// const  btnCloseED = modalED.querySelector(".editUS header .nav-closee");

// const ID = modalED.querySelector(".box-id")
// const name1 = modalED.querySelector(".box-name")
// const description = modalED.querySelector(".box-description")
// const image1 = modalED.querySelector(".box-image")
// const price1 = modalED.querySelector(".box-price")



// for(var btnED2 of btnED){
//    btnED2.onclick = function(){
//        modalED.classList.add("openXN")
//        console.log(this.getAttribute("data-id"))
//        var id = this.getAttribute("data-id")
//        var name = this.getAttribute("data-name")
//        var dsc = this.getAttribute("data-description")
//        var image = this.getAttribute("data-image")
//        var price = this.getAttribute("data-price")
       

      

//        ID.value = id
//        name1.value = name
//        description.value = dsc
//     //    image1.value = image
//         price1.value = price

      
//    }
// }
// btnCloseED.onclick = function(){
//    modalED.classList.remove("openXN")
// }

// // Delete PayCourses
// const btnDL = document.querySelectorAll(".btnDeleteUS")

// const modalDL = document.querySelectorAll(".editUS")[1];

// const btnCloseDL = modalDL.querySelector(".editUS header .nav-closee"); 

// const ID2 = modalDL.querySelector(".box-id");


// for(var btnDL2 of btnDL){
//     btnDL2.onclick = function(){
//         modalDL.classList.add("openXN")
//         console.log(this.getAttribute("data-id"))
//         var id = this.getAttribute("data-id")
//         ID2.value = id;
//     }
// }

// btnCloseDL.onclick = function(){
//     modalDL.classList.remove("openXN")
// }

// //create Paycourse

// const btnAdd = document.querySelectorAll(".btnaddUser")

// const modalAdd = document.querySelectorAll(".editUS")[2];

// const btnCloseAdd = modalAdd.querySelector(".editUS header .nav-closee"); 

// const ID3 = modalAdd.querySelector(".box-id");

// for(var btnDL3 of btnAdd){
//     btnDL3.onclick = function(){
//         modalAdd.classList.add("openXN")
//         console.log(this.getAttribute("data-id"))
//         var id = this.getAttribute("data-id")
//         ID3.value = id;
//     }
// }

// btnCloseAdd.onclick = function(){
//     modalAdd.classList.remove("openXN")
// }


// //search paycourses
// const btnSearch = document.querySelectorAll(".btnsearchUser")

// const modalSearch = document.querySelectorAll(".editUS")[3];

// const btnCloseSearch = modalSearch.querySelector(".editUS header .nav-closee"); 



// for(var btnS of btnSearch){
//     btnS.onclick = function(){
//         modalSearch.classList.add("openXN")
       
//     }
// }

// btnCloseSearch.onclick = function(){
//     modalSearch.classList.remove("openXN")
// }