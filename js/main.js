(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openMenu(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeMenu(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){if(t.getAttribute("aria-expanded")==="true"){closeMenu();}else{openMenu();}});
    if(c){c.addEventListener("click",closeMenu);}
    o.addEventListener("click",closeMenu);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();}});
    window.addEventListener("resize",function(){if(window.innerWidth>768&&t.getAttribute("aria-expanded")==="true"){closeMenu();}});
  }
  document.querySelectorAll(".faq-q").forEach(function(q){
    q.addEventListener("click",function(){
      var item=q.closest(".faq-item"),isOpen=item.classList.toggle("open");
      q.setAttribute("aria-expanded",isOpen?"true":"false");
    });
  });
})();
