//const logo = document.querySelectorAll("#logo path");

//for(let i = 0; i < logo.length; i++){
    //console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
//}

//console.log(logo)

const  observer = new  IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
       entry.target.classList.add('logo');
      }
      else{
       entry.target.classList.remove('logo');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.x-logo');
  hiddenElements.forEach((el) => observer.observe(el));


  document.getElementById('search-btn').style.borderRadius = "20px";


  function expand() {
    document.getElementById('search-box').style.width = "350px";
    document.getElementById('search-btn').style.borderTopLeftRadius = "0px";
    document.getElementById('search-btn').style.borderBottomLeftRadius = "0px";
    document.getElementById('search-bar').style.width = "270px";
 



  }

  function login(){
     document.getElementById('login-1').style.display = "flex";
     document.getElementById('Login-Info').innerHTML = "Login"
     document.getElementById('login-1').style.backgroundImage = "url('images/pic7.jpg')";
     document.getElementById('Login-bar').placeholder  = "Username";
     document.getElementById('login-text').innerHTML = "Login";
     document.getElementById('forgot').style.display = "flex";
     document.getElementById('Register').style.display = "flex";
     document.getElementById('Loginbtn').style.width = "80px";
     document.getElementById('Loginbtn').style.height = "35px";
     
  }

  function login2(){
     document.getElementById('login-1').style.display = "flex";
     document.getElementById('Login-Info').innerHTML = "Sign Up"
     document.getElementById('login-1').style.backgroundImage = "url('images/pic4.jpg')";
     document.getElementById('Login-bar').placeholder  = "Email";
     document.getElementById('login-text').innerHTML = "Sign Up";
     document.getElementById('forgot').style.display = "none";
     document.getElementById('Register').style.display = "none";
     document.getElementById('Loginbtn').style.width = "90px";
     document.getElementById('Loginbtn').style.height = "45px";

  }

  function login3(){
     document.getElementById('login-1').style.display = "flex";
     document.getElementById('Login-Info').innerHTML = "PREMIUM"
     document.getElementById('login-1').style.backgroundImage = "url('images/pic5.jpg')";
     document.getElementById('Login-bar').placeholder  = "Email";
     document.getElementById('login-text').innerHTML = "Sign Up";
     document.getElementById('forgot').style.display = "none";
     document.getElementById('Register').style.display = "none";
     document.getElementById('Loginbtn').style.width = "90px";
     document.getElementById('Loginbtn').style.height = "45px";

  }
  


  function pageout(){
    document.getElementById('login-1').style.display = "none";
  }

  