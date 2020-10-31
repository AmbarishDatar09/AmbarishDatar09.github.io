    function generateP(letter,number,special) { 
    var chars = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
    "0123456789", // numbers
    "@#$%" // either
    ];
    var randPwd = [letter, number, special].map(function(len, i) {return Array(len).fill(chars[i]).map(function(x) {return x[Math.floor(Math.random() * x.length)];}).join('');}).concat().join('').split('').sort(function(){return 0.5-Math.random();}).join('');
    return randPwd;
        }
        function Run() { 
          var el1 = document.getElementById("demo");
            el1.innerHTML = generateP(5,5,5); 
        } 
    
    function generateP2(letter,number,special) { 
    var pass = document.getElementById("myinput2").value;      
    var chars = [
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
                "0123456789", // numbers
                "@#$%" // either
                ];
    var randPwd2 = [letter, number, special].map(function(len, i) {return Array(len).fill(chars[i]).map(function(x) {return x[Math.floor(Math.random() * x.length)];}).join('');}).concat().join('').split('').sort(function(){return 0.5-Math.random();}).join('');
    randPwd2=pass+randPwd2;
    return randPwd2;
    }
    function Run2() { 
      var el2 = document.getElementById("demo2"); 
            el2.innerHTML = generateP2(3,4,5); 
    }
    function ValidateEmail() {  
        var emailid = document.getElementById("email");    
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
        if (!filter.test(emailid.value)) {  
            alert('Please provide a valid email address...');  
            email.focus;  
            return false;  
        }
        else alert('You have been subscribed !!!');  
    }  