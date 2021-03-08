const tabs = document.querySelectorAll(".tabs");

const imgContainer = document.querySelector(".image-Two");
const textConatiner = document.querySelector(".features-right-Two");



tabs.forEach(function(tab){
    tab.addEventListener("click", function(){

        imgContainer.classList.add("fade-out");
                    
        tabs.forEach(function(tab2){
            tab2.classList.remove("selected");
            tab2.classList.remove("firstTabImg");
        });

       
        if(tab.id === "tab1"){
            setTimeout(function(){
                imgContainer.innerHTML = `<img class="feature__img hiddenImage" src="./images/illustration-features-tab-1.svg" alt="dashboard">`;
            },400);
            imgContainer.classList.add("firstTabImg");
                textConatiner.innerHTML= `
                <h2>Bookmark in one click</h2>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                  gives you complete control over.
                </p>
                <button type="button" class="btn btn-MoreInfo">More Info</button>`;
           
            
            

            tab.classList.add("selected");

        }else if (tab.id === "tab2") {
            setTimeout(function(){
                imgContainer.innerHTML = `<img class="feature__img hiddenImage" src="./images/illustration-features-tab-2.svg" alt="dashboard">`;
            },400);
            imgContainer.classList.remove("firstTabImg");
            textConatiner.innerHTML= `
            <h2>Intelligent search</h2>
            <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
            </p>
            <button type="button" class="btn btn-MoreInfo">More Info</button>`;
        

            tab.classList.add("selected");

        } else if (tab.id === "tab3") {
            setTimeout(function(){
                imgContainer.innerHTML = `<img class="feature__img hiddenImage" src="./images/illustration-features-tab-3.svg" alt="dashboard">`;
            },400);
            imgContainer.classList.remove("firstTabImg");
            textConatiner.innerHTML= `
            <h2>Share your bookmarks</h2>
            <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
            </p>
            <button type="button" class="btn btn-MoreInfo">More Info</button>`;
            tab.classList.add("selected");

        }

        setTimeout(function(){
            imgContainer.classList.remove("fade-out");
        },500);
        
    
    });



});


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