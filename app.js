const $btn = document.querySelector('.btn'),
$show = document.querySelector('.show'),
$display = document.querySelector('.display');


$btn.addEventListener("click",e=>{
    $show.innerHTML = `<h1>${getFullPlay().main}</h1> <h1>${getFullPlay().second}</h1>`;
});

const MAIN_PLAY_NUMBERS = {
    Zuma:[02,05,15,18,20,24,35,39,41,47,50,52],
    Paulo:[04,07,13,19,22,26,34,38,44,45,51,53]
};

const SECOND_PLAY_NUMBERS = {
    Zuma:[01,04,06,08,11],
    Paulo:[03,05,07,09,12]
};
$display.innerHTML = `
    <p>Zuma: ${MAIN_PLAY_NUMBERS.Zuma} - ${SECOND_PLAY_NUMBERS.Zuma} </p>
    <p>Paulo: ${MAIN_PLAY_NUMBERS.Paulo} - ${SECOND_PLAY_NUMBERS.Paulo}</p>
`;

const allMainNumbers = MAIN_PLAY_NUMBERS.Zuma.concat(MAIN_PLAY_NUMBERS.Paulo).sort((a,b)=> a > b ?1 :-1);
const allSecondNUmbers = SECOND_PLAY_NUMBERS.Zuma.concat(SECOND_PLAY_NUMBERS.Paulo);

const getFullPlay = ()=>{
    const PLAY = {
        main:[],
        second:[]
    };
    
    for (let i = 0; i < 5; i++){
        const index = Math.floor(Math.random()*allMainNumbers.length);
        // PLAY.main.push(allMainNumbers[index]);
        if (PLAY.main.some(e=>e===allMainNumbers[index])){
            i = i-1;
        }else{
            PLAY.main.push(allMainNumbers[index]);
        };
    };

    for (let i = 0; i < 2; i++){
        const index = Math.floor(Math.random()*allSecondNUmbers.length);
        // PLAY.second.push(allSecondNUmbers[index]);
        if (PLAY.second.some(e=>e===allSecondNUmbers[index])){
            i = i-1;
        }else{
            PLAY.second.push(allSecondNUmbers[index]);
        };
    };

    PLAY.main.sort((a,b)=> a > b ?1 :-1);
    PLAY.second.sort((a,b)=> a > b ?1 :-1);

    return PLAY;
};

console.log(getFullPlay());

