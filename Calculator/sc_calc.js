         function op()
         {
             let x = document.getElementById("res").value
             let y = eval(x)
             document.getElementById("res").value = y
         }

         function display(val)
         {
             document.getElementById("res").value+=val
         }
                      
         function cls()
         {
             document.getElementById("res").value = ""
         }  
