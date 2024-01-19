(function(){

    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        //console.log(add);
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        //console.log(currentTestimony);
        value = Number(currentTestimony);
        value += add;
        //console.log(value)
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        //console.log(value);
        sliders[value-1].classList.add('testimony_body--show');

        
    }
    
})();

//1:15:31