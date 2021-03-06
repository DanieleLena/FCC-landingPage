


// QUESTIONS =========================================================

const question = document.querySelectorAll(".question");
 

question.forEach(function(q){

    q.addEventListener("click", function(){
        
       const arrow = q.children[0].children[0];
       const colorArrow = q.children[0].children[0].children[0];

        question.forEach(function(q2){
            if(q2 != q){
                q2.classList.remove("show");
                q2.children[0].children[0].classList.remove("svg-show");
                q2.children[0].children[0].children[0].classList.remove("color-arrow");  
            }
        });
       
            arrow.classList.toggle("svg-show");
            colorArrow.classList.toggle("color-arrow");
            q.classList.toggle("show");

    });
});