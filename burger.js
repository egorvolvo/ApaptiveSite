window.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#burger").addEventListener("click", function(){

    document.querySelector("#menu").classList.add("is-active")

  })
  document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#menu").classList.remove("is-active")
  })
  document.querySelectorAll(".list-menu-burger").forEach(function(el){
    el.addEventListener("click", function(){
    document.querySelector("#menu").classList.remove("is-active")
    })
  })
  // $element.addEventListener('click', function(e) {
  //   // отменяем стандартное действие браузера
  //   e.preventDefault();
})
