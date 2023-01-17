const allstars = document.querySelector('.all-stars');
const starScore = document.querySelector('.star-score');

let clickedStar = -1;
// save the number user rated.

let starArray = [0, 0, 0, 0, 0];
// 0 is blank star, 1 is full star.

for(let i = 0; i<5; i++){
    let starImg = document.createElement('img');

    starImg.setAttribute('class', 'star');
    starImg.setAttribute('src', 'star-trans.png');
    starImg.setAttribute('id', 'star'+i)

    starImg.addEventListener('mouseover', MouseOnStarChangeImg);
    starImg.addEventListener('mouseout', MouseOffStarChangeImg);
    starImg.addEventListener('click', OnClickChangeStarScore);

    allstars.appendChild(starImg);
}

// when user clicks, it changes text, clickedStar variable, and starArray.
function OnClickChangeStarScore(event){
    for(let i=0;i<5;i++){
        if('star'+i === this.id){
            starScore.textContent = i+1;
            clickedStar = i;
            for(let j = 0; j<=i; j++){
                starArray[j] = 1;
            }
        }
    }
}

// when mouse cursor moves out from rating, it calls coloring function.
function MouseOffStarChangeImg(event){

    //if user did not click.
    if(clickedStar === Number(-1)){
        for(let i  = 0; i < 5; i++){
            starArray[i] = 0;
        }
    }else{
        //if user did click.
        for(let i  = 0; i <= clickedStar; i++){
            starArray[i] = 1;
        }
        for(let i  = clickedStar+1; i < 5; i++){
            starArray[i] = 0;
        }
    }
    ColorStars();
}

// when mouse cursor moves into rating, it calls coloring function.
function MouseOnStarChangeImg(event){
    for(let i  = 0; i < 5; i++){
        if(this.id == 'star'+i){
            for(let j = 0; j<=i; j++){
                starArray[j] = 1;
            }
            for(let j = i+1;j<5;j++){
                starArray[j] = 0;
            }
        }
    }
    ColorStars();
}

// change img of stars by referencing star array.
function ColorStars(){
    for(let i = 0; i < 5; i++){
        let starTemp = document.getElementById('star'+i);
        if(starArray[i] == Number(1)){
            starTemp.setAttribute('src', 'star.png');
        }else{
            starTemp.setAttribute('src', 'star-trans.png');
        }
    }
}