//===================================== Firstly created code  start===================================================================

// javascript function start
javascript:(function(){  
    textTransform = document.getElementById('text_transform');
    var hasClass = document.querySelector(".new-created-Element") !== null;;
    
    textTransform.addEventListener('click',function(){
    if(!hasClass){
        createElement();
    button_upper.addEventListener('click',upperCaseFunc);
    button_lower.addEventListener('click',lowerCaseFunc);
    button_capital.addEventListener('click',capitalCaseFunc);
    }
    hasClass=true;
    removeElement();
    
    })
    
    // Create Input Element On book mark click
    createElement = function(){
    inputForm=document.createElement('div');
    inputForm.setAttribute('class','new-created-Element')
    inputForm.innerHTML =`
    <form action="" id="form">
      <textarea placeholder="text" id="text"></textarea>
      <div class="btn-container">
        <button id="button_upper" class="btn">UPPERCASE</button>
        <button id="button_lower" class="btn">lowercase</button>
        <button id="button_capital" class="btn">CapitalizeCase</button>
      </div>
    </form>
    <div id="inpt-text"></div>
    <button class="copy btn">Copy</button>
    <span class="textCopied" style="text-align:center;visibility: hidden;">Text Copied</span>
    <button class="close_btn btn">X</button>
  `
        document.body.appendChild(inputForm);
        button_upper = document.getElementById("button_upper");
        button_lower = document.getElementById("button_lower");
        button_capital = document.getElementById("button_capital");
        inpt_text = document.getElementById("inpt-text");
        inputText = document.getElementById("text");
        form = document.getElementById("form");
        NewElement = document.querySelector(".new-created-Element");
        close_btn = document.querySelector(".close_btn");
        copy = document.querySelector(".copy");
        textCopied =document.querySelector('.textCopied');
        button_upper.addEventListener("click", upperCaseFunc);
        button_lower.addEventListener("click", lowerCaseFunc);
        button_capital.addEventListener("click", capitalCaseFunc);
        close_btn.addEventListener("click", function () {
          NewElement.remove();
          hasClass = false;
        });
        copy.addEventListener('click',function()
        {
            var copyText = document.getElementById("inpt-text").textContent;
            navigator.clipboard.writeText(copyText);
            textCopied.style.visibility = 'visible';
            setTimeout(function() {
              textCopied.style.visibility = 'hidden';
            }, 1000);
        }
        )
    // inpt_text=document.getElementsByName('body');
    StyleFunc();
    removeElement();
    }
    // Make the Text into UpperCase
    upperCaseFunc =function(e){
        e.preventDefault()
        inputText=document.getElementById('text').value;
        let transFormedText=inputText.toUpperCase();
        inpt_text.innerHTML = transFormedText;
     
    }
    // Make the text into LowerCase
    lowerCaseFunc = function(e){
        e.preventDefault();
        inputText=document.getElementById('text').value;
        let transFormedText=inputText.toLowerCase();
        inpt_text.innerHTML = transFormedText;
    }
    //Make the Text into Capitlize
    capitalCaseFunc = function(e){
        e.preventDefault()
        inputText=document.getElementById('text').value;
        var words = inputText.split(" ");
        for (var i = 0; i < words.length; i++) 
        {
            var word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      transFormedText = words.join(" ");
      inpt_text.innerHTML = transFormedText;
    }
    
    // Style the input filed and result
    
    function StyleFunc() {
              var NewElement = document.querySelector(".new-created-Element");
              NewElement.style.position = "fixed";
              NewElement.style.right = "0";
              NewElement.style.top = "0";
              NewElement.style.background = "#fff";
              NewElement.style.width = "400px";
              NewElement.style.padding = "40px";
              NewElement.style.boxSizing = "border-box";
              NewElement.style.boxShadow = "7px 6px 14px 11px #686262";
          
              var inputText = document.getElementById("text");
              var form = document.getElementById("form");
              var inpt_text = document.getElementById("inpt-text");
              var close_btn = document.querySelector(".close_btn");
              var btns = document.querySelectorAll('.btn');
              var textCopied = document.querySelector('.textCopied');
        
              btns.forEach(function(e){
                e.style.width= 'auto';
                e.style.padding="10px";
                e.style.fontSize='13px';
                e.style.background="#F2F5F7";
                e.style.cursor='pointer';
                e.style.marginTop='10px'
                e.addEventListener("mouseover", function() {
                    e.style.backgroundColor = "#1e70b9";
                    e.style.color = "#fff";
                  });
                e.addEventListener("mouseout", function() {
                    e.style.backgroundColor = "#F2F5F7";
                    e.style.color = "#000";
                  });
            
              })
              close_btn.style.position = "absolute";
              close_btn.style.right = "1px";
              close_btn.style.top = "1px";
              inputText.style.width = "300px";
              inputText.style.height = "100px";
              inputText.style.padding = "10px";
              form.style.display = "flex";
              form.style.flexDirection = "column";
              form.style.rowGap = "20px";
              inpt_text.style.fontSize = "16px";
              inpt_text.style.padding = "10px";
              inpt_text.style.marginTop = "40px";
              inpt_text.style.border = "1px solid #000";
              
            }  
    
    removeElement = function(){
        // remove the new created element
    close_btn.addEventListener('click',function(){
        NewElement.remove();
        hasClass=false;
    })
    
    }
    })();
    // javascript function end
//===================================== Firstly created code  end=====================================================================

//===================================== code to make bookmark start=====================================================================
(function textTransform() {
    var hasClass = document.querySelector(".new-created-Element") !== null;
    var button_upper, button_lower, button_capital, inpt_text, inputText, form, NewElement, close_btn;
  
    if (!hasClass) {
      createElement();
      button_upper.addEventListener("click", upperCaseFunc);
      button_lower.addEventListener("click", lowerCaseFunc);
      button_capital.addEventListener("click", capitalCaseFunc);
    }
  
    hasClass = true;
  
    function createElement() {
      var inputForm = document.createElement("div");
      inputForm.setAttribute("class", "new-created-Element");
      inputForm.innerHTML = `
        <form action="" id="form">
          <textarea placeholder="text" id="text"></textarea>
          <div class="btn-container">
            <button id="button_upper" class="btn">UPPERCASE</button>
            <button id="button_lower" class="btn">lowercase</button>
            <button id="button_capital" class="btn">CapitalizeCase</button>
          </div>
        </form>
        <div id="inpt-text"></div>
        <button class="copy btn">Copy</button>
        <span class="textCopied" style="text-align:center;visibility: hidden;">Text Copied</span>
        <button class="close_btn btn">X</button>
      `;
      document.body.appendChild(inputForm);
      button_upper = document.getElementById("button_upper");
      button_lower = document.getElementById("button_lower");
      button_capital = document.getElementById("button_capital");
      inpt_text = document.getElementById("inpt-text");
      inputText = document.getElementById("text");
      form = document.getElementById("form");
      NewElement = document.querySelector(".new-created-Element");
      close_btn = document.querySelector(".close_btn");
      copy = document.querySelector(".copy");
      textCopied =document.querySelector('.textCopied');
      
      StyleFunc();
      button_upper.addEventListener("click", upperCaseFunc);
      button_lower.addEventListener("click", lowerCaseFunc);
      button_capital.addEventListener("click", capitalCaseFunc);
      close_btn.addEventListener("click", function () {
        NewElement.remove();
        hasClass = false;
      });
      copy.addEventListener('click',function()
      {
          var copyText = document.getElementById("inpt-text").textContent;
          navigator.clipboard.writeText(copyText);
          textCopied.style.visibility = 'visible';
          setTimeout(function() {
            textCopied.style.visibility = 'hidden';
          }, 1000);
      }
      );

    }
      function upperCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toUpperCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;

    }
  
    function lowerCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toLowerCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;
    }
  
    function capitalCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var words = inputText.split(" ");
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      var transFormedText = words.join(" ");
      document.getElementById("inpt-text").innerHTML = transFormedText;
    }
  
    function StyleFunc() {
      var NewElement = document.querySelector(".new-created-Element");
      NewElement.style.position = "fixed";
      NewElement.style.right = "0";
      NewElement.style.top = "0";
      NewElement.style.background = "#fff";
      NewElement.style.width = "400px";
      NewElement.style.padding = "40px";
      NewElement.style.boxSizing = "border-box";
      NewElement.style.boxShadow = "7px 6px 14px 11px #686262";
  
      var inputText = document.getElementById("text");
      var form = document.getElementById("form");
      var inpt_text = document.getElementById("inpt-text");
      var close_btn = document.querySelector(".close_btn");
      var btns = document.querySelectorAll('.btn');
      var textCopied = document.querySelector('.textCopied');

      btns.forEach(function(e){
        e.style.width= 'auto';
        e.style.padding="10px";
        e.style.fontSize='13px';
        e.style.background="#F2F5F7";
        e.style.cursor='pointer';
        e.style.marginTop='10px'
        e.addEventListener("mouseover", function() {
            e.style.backgroundColor = "#1e70b9";
            e.style.color = "#fff";
          });
        e.addEventListener("mouseout", function() {
            e.style.backgroundColor = "#F2F5F7";
            e.style.color = "#000";
          });
    
      })
      close_btn.style.position = "absolute";
      close_btn.style.right = "1px";
      close_btn.style.top = "1px";
      inputText.style.width = "300px";
      inputText.style.height = "100px";
      inputText.style.padding = "10px";
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.rowGap = "20px";
      inpt_text.style.fontSize = "16px";
      inpt_text.style.padding = "10px";
      inpt_text.style.marginTop = "40px";
      inpt_text.style.border = "1px solid #000";
      
    }
  })();
// ===================================== code to make bookmark End=====================================================================
