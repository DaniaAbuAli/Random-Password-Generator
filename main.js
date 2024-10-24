let button = document.querySelector("button");

button.onclick = function () {
   let smallLetters="abcdefghijklmnopqrstuvwxyz";
   let capitalLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let numbers="0123456789";
   let symbols= "~`!@#$%^&*()-_+={}[]|\\;:\"<>,./?";
   let allChars=smallLetters+capitalLetters+numbers+symbols;
   let smallIdx=Math.floor(Math.random()*smallLetters.length);
   let capitalIdx=Math.floor(Math.random()*capitalLetters.length);
   let numbersIdx=Math.floor(Math.random()*numbers.length);
   let symbolsIdx=Math.floor(Math.random()*symbols.length);
   let res=smallLetters[smallIdx]+capitalLetters[capitalIdx]+numbers[numbersIdx]+symbols[symbolsIdx];
   for(let i=5;i<=12;i++){
    let index=Math.floor(Math.random()*allChars.length);
    res+=allChars[index];
   }
   function shuffle(res){
    let arr=Array.from(res);
    for(let i=res.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr.join("");
   }
   res=shuffle(res);
   let input=document.querySelector("input");
   input.value=res;
   let icon=document.querySelector("i");
   icon.onclick=function(){
    input.select();
    navigator.clipboard.writeText(input.value);
   }
};


