clickMe.addEventListener('click', function(e){ 
    popover.style.display = 'block'  
    document.addEventListener('click', function(){
      popover.style.display = 'none' 
    })
  })
  wrapper.addEventListener('click', function(e){
    e.stopPropagation()
  })
  