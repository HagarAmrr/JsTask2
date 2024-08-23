// ScrollToTop function definition
function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const btn2 = document.querySelector('.btn2');
        btn2.addEventListener('click', function(){
            const show = document.getElementById("card");
            if (show.classList.contains('hidden')) {
                show.classList.remove('hidden');
            } else {
                show.classList.add('hidden');  
            }
        });

const btn1 = document.querySelector('.btn1');
        btn1.addEventListener('click', function(){
            const show = document.getElementById("show");
            if (show.classList.contains('hidden')) {
                show.classList.remove('hidden');
            } else {
                show.classList.add('hidden');  
            }
        })


const btn = document.querySelector('.btn');
        btn.addEventListener('click',  function() {
            const targetButton = document.getElementById("btn");
            if (targetButton.classList.contains('hidden')) {
                targetButton.classList.remove('hidden');
            } else {
                targetButton.classList.add('hidden');  
            }
        });
       