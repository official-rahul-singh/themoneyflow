// header search button
let search_btn = document.querySelector('.search-btn');
let search_input = document.querySelector('.search-input');
let svg1 = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
let svg2 = '<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 384 512" fill="#000"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let isSvg1 = true;
search_btn.addEventListener('click', function () {
    search_btn.innerHTML = isSvg1 ? svg2 : svg1;
    isSvg1 = !isSvg1;
    search_input.style.display = search_input.style.display === "block" ? "none" : "block";
});

// bottom to top btn js
// Get the button
if (document.querySelector('#myBtn')) {
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener('click', function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    }

    // ============================================
    // menu-toggle
let headerUl = document.querySelector('header nav');

function toggleButtons() {
  let header = document.querySelector("header");
  headerUl.classList.toggle("show-ul");
let cancel_btn= document.querySelector(".cancel-btn");

  if (!headerUl.classList.contains("show-ul")) {
    document.querySelector('.doc-overlay').remove();
    enableScroll();
  } else {
    let docOverlayDiv = document.createElement('div');
    header.appendChild(docOverlayDiv);
    docOverlayDiv.classList.add('doc-overlay');
    disableScroll();
    cancel_btn.style.display="block";

    docOverlayDiv.addEventListener('click', function (event) {
      headerUl.classList.remove("show-ul");
      docOverlayDiv.remove();
      enableScroll();
    });
  }
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}

// my js dropdown
const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(e) {
  const svgicon = e.target;
  const parentOfTarget = svgicon.parentNode; // li

  dropdowns.forEach((dropdown) => {
    if (dropdown !== parentOfTarget && !dropdown.contains(parentOfTarget)) {
      dropdown.classList.remove("show-dropdown");
      console.log("hello");
    }
  });

  if (parentOfTarget) {
    parentOfTarget.classList.toggle("show-dropdown");
  }
}

dropdowns.forEach((dropdown) => {
  dropdown.querySelector('.dropdown svg').addEventListener("click", toggleDropdown);
});

// // Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (![...dropdowns].some((dropdown) => dropdown.contains(e.target))) {
     dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show-dropdown");
     });
  }
});
// my js dropdown

// accordion code start
const detailsElements = document.querySelectorAll("details");
const summaryElements = document.querySelectorAll("summary");

summaryElements.forEach((summary, index) => {
    summary.addEventListener("click", () => {
      detailsElements.forEach((details, i) => {
        if (i !== index) {
          details.open = false;
        }
      });
    });
});


// table of content
document.addEventListener('DOMContentLoaded', function() {
const tableToggle = document.querySelector(".thead");
const table_list = document.querySelector(".table-list");
const list_drop = document.querySelector(".list-drop");
const subList_drop = document.querySelector(".list-drop ul");
let icon1 ='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0.25 0 20.25 20.325"><path fill="#f8bb12" d="M10.375 0A10.125 10.125 0 0 1 20.5 10.125v.075a10.125 10.125 0 0 1-10.125 10.125A10.125 10.125 0 0 1 .25 10.2v-.075A10.125 10.125 0 0 1 10.375 0"/><path stroke="#fff" stroke-linecap="round" d="M13.625 10.662h-6.5"/></svg>';
let icon2 ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="#f8bb12" d="M9 18a9 9 0 1 0 0 -18 9 9 0 1 0 0 18m-0.844 -5.906v-2.25h-2.25c-0.468 0 -0.844 -0.376 -0.844 -0.844s0.376 -0.844 0.844 -0.844h2.25v-2.25c0 -0.468 0.376 -0.844 0.844 -0.844s0.844 0.376 0.844 0.844v2.25h2.25c0.468 0 0.844 0.376 0.844 0.844s-0.376 0.844 -0.844 0.844h-2.25v2.25c0 0.468 -0.376 0.844 -0.844 0.844s-0.844 -0.376 -0.844 -0.844"/></svg>';

tableToggle.addEventListener("click", ()=>{
  tableToggle.classList.toggle('show-list');
});
list_drop.addEventListener("click", ()=>{
  subList_drop.style.display =subList_drop.style.display === "block" ? "none" : "block";
});
subList_drop.addEventListener("click", (event) => {
  event.stopPropagation();
});
});

