/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


 // Define Global Variables

 
let sections=[...document.getElementsByTagName("section")]; 
const totop= document.getElementById("toTop");
let links= document.getElementsByTagName("a"); 





// build the nav


let name;
list = document.querySelector("ul");
const myDocFrag = document.createDocumentFragment();
for(i=0;i<sections.length;i++)
{
    const item = document.createElement("li");
    item.className=`section${i+1}`;
    name = sections[i].dataset.nav;    
    item.innerHTML=`<a href="#section${i+1}" class="menu__link" data-sec="section${i+1}" > ${name} </a>`;
    myDocFrag.appendChild(item);

}
list.append(myDocFrag);





// Add class 'active' to section when near top of viewport


sections.forEach(function(section)
{
    document.addEventListener("scroll", function()
    {
        const position= section.getBoundingClientRect();
        if(position.top >= 0 && position.bottom <= window.innerHeight) 
        {
            const current = document.getElementsByClassName("your-active-class");
            current[0].classList.remove("your-active-class"); 
            section.classList.add("your-active-class");
        }

    });
});





// Scroll to anchor ID using scrollTO event


for(const link of links)
{
    link.addEventListener("click", function(e)
    {
        e.preventDefault();
        const sec =document.getElementById(`${link.dataset.sec}`);
        window.scrollTo({
            top : sec.offsetTop ,
            behavior : "smooth"
        });  
    });
}





// Scroll to the top of the page 


totop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})








