const menu_toggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

menu_toggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if(!navigation.contains(event.target) && !menu_toggle.contains(event.target)){
        navigation.classList.remove('show');
    }
});

// Form
const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob');
    const message = document.getElementById('message');
    const errorMsg = document.getElementById('errorMsg');
    const resultDisplay = document.getElementById('resultDisplay');
    const welcomeName = document.getElementById('welcomeName');
    const tagline = document.getElementById('tagline');
    
    const today = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = today.getFullYear()
    const thisday = days[today.getDay()]
    const thismonths = months[today.getMonth()]
    const todaytime = today.toLocaleTimeString()
   
            
             tagline.innerHTML = `<div style="background-image: url('https://plus.unsplash.com/premium_photo-1664910332165-34dfe0b99ef4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); 
             background-size: cover; 
             background-position: 0px;
             
             
                padding-top:50%; padding-bottom:50%;">
             <span style="
             background-color: #ff9595ff;
             padding:10px;
             font-size: 2rem; 
             font-weight: 700;
             color: #638f76;
             
             
             letter-spacing: 2px;
             text-shadow: 2px 2px 0 rgb(255, 255, 255),  /* Right bottom */
            -2px -1px 0 rgb(255, 255, 255); ">Connect with us</span></div>`;
            
    
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting

      const name = nameInput.value.trim();
      const gender = document.querySelector('input[name="gender"]:checked');
      const date = dobInput.value;
      const messages = message.value.trim();
      
        if(name === ''){
            errorMsg.textContent = 'Input your name';
             resultDisplay.textContent = '';
            return;
            
        }



        if(date === ''){
            errorMsg.textContent = 'Select your birth date';
             resultDisplay.textContent = '';
            return;
        }

        if(!gender){
            errorMsg.textContent = 'Select gender';
             resultDisplay.textContent = '';
            return;
        }

        if(messages === ''){
            errorMsg.textContent = 'Leave  a message';
             resultDisplay.textContent = '';
            return;
        }





        errorMsg.textContent = '';
        welcomeName.innerHTML = ` ${name}`;
        resultDisplay.innerHTML = `
        <div style= "color: rgb(34, 40, 48); margin: 10px;   display: flex; flex-direction: column; ">
        <span>Current Time : ${thisday} ${thismonths} ${year} ${todaytime} </span>
        <span>Name : ${name}</span>
        <span>Birth Date : ${date}</span>
        <span>Gender : ${gender.value}</span>
        <span>Message : ${messages}</span>
    
        </div>
        `;

        if(!resultDisplay.innerHTML == ``){
            tagline.textContent = '';
            
        }

        
      
    });




