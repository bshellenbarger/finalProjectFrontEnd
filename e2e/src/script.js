let menuItems = document.querySelectorAll("li.has-submenu");
Array.prototype.forEach.call(menuItems, function (el, i) {
  el.addEventListener("mouseover", function (event) {
    this.className = "has-submenu open";
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", function (event) {
    timer = setTimeout(function (event) {
      document.querySelector(".has-submenu.open").className = "has-submenu";
    }, 1000);
  });
});

(function() {
  let menu = document.querySelector('ul'),
  menulink = document.querySelector('img');

  menulink.addEventListener('click', function(e) {
    menu.classList.toggle('navigation');
    e.preventDefault();
  });

})();

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}