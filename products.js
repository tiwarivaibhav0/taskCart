var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cart=[];

$(document).ready(function(){
    
    Show();
 
    $(document).on('click','a',function(event){
        event.preventDefault();

        if($(this).hasClass("add-to-cart")){
            var clickedId=$(this).closest('div')[0].id;
            //console.log(clickedId);
            if(cart.length>0){
                    let flag=0;
                   for(let j=0;j<cart.length;j++){
                    if(clickedId==cart[j].id)
                       {    flag=1;
                           cart[j].quantity=cart[j].quantity+1;
                           showCart();
                       }
                      
                }
                     if(flag==0){
                        for(let i=0;i<products.length;i++){
                            if(clickedId==products[i].id){
                                var obj=products[i];
                                obj['quantity']=1;
                               cart.push(products[i]);
                    
                        }
                        }
                         showCart();
                     }

            }
            else{
                for(let i=0;i<products.length;i++){
                    if(clickedId==products[i].id){
                        var obj=products[i];
                        obj['quantity']=1;
                       cart.push(products[i]);
            
                }
                }
    
                showCart();
            }

        }

        if($(this).hasClass("delete")){
            cart.splice($(this).closest('td').parent()[0].sectionRowIndex-1,1);
            showCart();
            
            



        }
        



    });


     $(document).on('keyup','td',function(event){
        event.preventDefault();
        if($(this).hasClass("editQ")){
            var quant=$(this).closest('td').text();
           cart[$(this).closest('td').parent()[0].sectionRowIndex-1].quantity=Number(quant);
            



        }

        
        

     });
     $(document).on('click','button',function(event){
        event.preventDefault();
        if($(this).hasClass("empty")){
            
            cart=[];
            showCart();


        }


    });


});



function Show(){
    let text='';
    for(let i=0;i<products.length;i++){
        text+="<div id='"+products[i].id+"' class='product'><img src='images/"+products[i].image+"'><h3 class='title'><a href='#'>"+products[i].name+"</a></h3> <span>Price: $"+products[i].price+".00</span><a class='add-to-cart' href='#'>Add To Cart</a></div>";

    }
    $("#products").html(text);
}


function showCart(){
    let text="<table>";
    text+=text+="<tr><th>Product ID</th><th>Product Name</th><th>Product Price</th><th>Quantity</th></tr>";
    for(let i=0;i<cart.length;i++){
        text+="<tr><td>"+cart[i].id+"</td><td>"+cart[i].name+"</td><td>Price: $"+cart[i].price+".00</td><td contenteditable='true' class='editQ'>"+cart[i].quantity+"</td><td><a href='#' class='delete'>Delete</a></td></tr>";


    }
    text+="<button class='empty'>Empty Cart</button>";
    text+="</table>"
   
    $("#cart").html(text);

}