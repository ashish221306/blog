function changemode(){
  
    var darkmode= document.getElementById('darkmode');
    if(darkmode.checked==true ){


        var bodyStyles = window.getComputedStyle(document.body);
         var themebg = bodyStyles.getPropertyValue('--theme-bg');
     bodyStyles.setProperty('--theme-bg', 'red');

        document.querySelector('body').style.background="#000";
        document.querySelector('body').style.transition="background 0.6s ease-in";
        localStorage.setItem('darkmode',darkmode.checked);
        
    }else if(darkmode.checked==false){
        document.querySelector('body').style.background="inherit";
        localStorage.removeItem('darkmode')
    }
    else{
       document.querySelector('body').style.background="inherit";
       localStorage.removeItem('darkmode')
   
    }
  
   }


   document.querySelector('.mobilenavicon').onclick=function(){
     document.querySelector('nav').classList.toggle('show-nav');
   }

 
    
