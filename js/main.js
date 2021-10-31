function classToggler(name,callback) {

  // apply click handler to all elements with matching className
  let allElements = document.querySelectorAll(".faq_item");
  
  for(let x = 0, len = allElements.length; x < len; x++) {
      if(allElements[x].className == name) {
          allElements[x].onclick = handleClick;
      }
  }
  function handleClick() {
      
      let index = 0;

      for(let x = 0; x < allElements.length; x++) {
          if(allElements[x] == this) {
              break;
          }

          else {
              index++;
          }
      }

      callback.call(this,index);
  }
}

classToggler("faq_item", function(index){
  for (let i = 0; i < 6; i++) {
    if (i == index) {
      document.querySelectorAll(".faq_list_item")[i].classList.toggle('faq_item_open');
      document.querySelectorAll(".plus")[i].classList.toggle('cross');

    }
    else {
      document.querySelectorAll(".faq_list_item")[i].classList.remove('faq_item_open');
      document.querySelectorAll(".plus")[i].classList.remove('cross');
    }
  }
});


