
    // ===============================
    // jQuery 
    // ===============================
   
    // List Completing
    $("ul").on("click","li",function(){
    $(this).toggleClass("listStyle");
    }); 

    // List Removing

    $("ul").on("click","span", function(){
        $(this).parent().fadeOut(500, function(event){
         $(this).remove();
        })
        event.stopPropagation();
    })

    // List Adding
    $("input[type='text']").on("keypress", function(e){
        if(e.which === 13) {
           var inputValue = $(this).val();
           $(this).val("");
           $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + inputValue + "</li>");
        }
    })

/*

    // ===============================
    // Vanilla JS  
    // ===============================
   
    // List Done   
    var lis = document.querySelectorAll("li");
        for (var i = 0; i < lis.length; i++){
            
             lis[i].addEventListener("click", function(){
                this.classList.toggle("listStyle");
            }) 
        }

    //List Remove
    var deleteSpan = document.querySelectorAll("span");
        for(var i = 0; i < deleteSpan.length; i++){
                    
            deleteSpan[i].addEventListener("click", function(event){
                this.parentNode.remove();
                    event.stopPropagation();
            })
            
        }

    // List Add

    var input = document.querySelector("input[type='text']");
        input.addEventListener("keypress", function (e){
            if(e.which === 13){
                var inputValue = this.value;
                this.value="";
                var ul = document.querySelector("ul");
                var addToDo = "<li><span>"+"X "+"</span>" + inputValue + "</li>";
                ul.innerHTML += addToDo; }          
        })
        
*/
















