const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
   button.addEventListener("click",function(event){{
      var btnItem = event.target
      var product = btnItem.parentElement
      var productImg = product.querySelector("img").src
      var productName = product.querySelector("H3").innerText
      var productPrice = product.querySelector("p").innerText
    // console.log(productPrice, productImg, productName)
    addcart(productPrice, productImg, productName)
    
   }})
})
function addcart(productPrice, productImg, productNam) {
   var addtr = document.createElement("tr")
   var trcontent = productPrice
   addtr.innerHTML = trcontent
   var cartTable = document.querySelector("tbody")
   // console.log(cartTable)
   cartTable.append(addtr)
}