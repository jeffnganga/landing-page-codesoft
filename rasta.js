const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='none'
}