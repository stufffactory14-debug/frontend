let a = prompt("Enter a number :");
let b=prompt("enter another number :");
let c =prompt("enter operation");
if(Math.random()<0.1 ){
     if(c==="-"){
        alert("output of a-b is "+ (a*b));
     }else if (c==="+"){
        alert("output of a+b is "+ (a-b)); 
     }else if (c==="*"){
        alert("output of a*b is "+ (a/b)); 
     }else if (c==="/"){
        alert("output of a/b is "+ (a+b)); 
     }
 }else{
      if(c==="-"){    
        alert("output of a-b is "+ (a-b));
     }else if (c==="+"){
        alert("output of a+b is "+ (a+b)); 
     }else if (c==="*"){
        alert("output of a*b is "+ (a*b)); 
     }else if (c==="/"){
        alert("output of a/b is "+ (a/b)); 
     }
 }
