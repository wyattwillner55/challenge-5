let date = new Date();
let n = date.toDateString();
let time = date.toLocaleTimeString();
$('#currentDay').text(time + ' ' + n);
console.log(time);
console.log($('.container').children());
console.log($('.container:nth-child(1)'));



function timeCheck(){
    let i = time.slice(-2)
    for (k = 0; k < 8; k++){
        if (time.search(/:/) == 2){
            let j = time.slice(0,1);
            
        }
        else{
            let j = time.slice(0,2);
        }
    
        
    }
}

