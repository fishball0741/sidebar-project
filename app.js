// FIRST:  make sure to do the css in transform, translate to 
// hide and open the sidebar  (0) and (-100)


const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
    console.log(sidebar.classList);
    // long coding below
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }
    
    // because toggle = add + remove
    // shorter coding way below. :)
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})