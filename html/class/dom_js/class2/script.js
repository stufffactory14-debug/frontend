// this is get element by class name
 console.log(document.getElementsByClassName("list-items"));
  const items = document.getElementsByClassName("list-items"); 
  for (let i = 0; i < items.length; i++) { 
    items[i].style.textShadow = "2px 2px 2px gray";
     items[i].style.color = "gray";
     }
      const heading = document.querySelector(".list-items"); // first match
       const allParas = document.querySelectorAll(".list-items"); // all matches
       console.log(heading);
       console.log(allParas);
