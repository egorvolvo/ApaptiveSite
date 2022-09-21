document.addEventListener('DOMContentLoaded', function() {
  const tabsButtons = document.querySelectorAll(".tabs__btn")
  tabsButtons.forEach( function(tabsBtn) {

    tabsBtn.addEventListener('click', function(event) {
      tabsButtons.forEach(btn => btn.classList.remove("step-active"))
      event.target.classList.add("step-active")

      const path = event.currentTarget.dataset.path
      console.log(path)
      // event.target.classList.toggle(".step-active")
      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove("tab-content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
    })
  })
})
