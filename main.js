
const div = document.getElementById('joke'); 
const btn = document.getElementById('joke-btn')


const addJoke = () => {
const xhr = new XMLHttpRequest(); 

xhr.open('GET','https://api.chucknorris.io/jokes/random'); 


xhr.onreadystatechange = function (){
  if(this.readyState === 4 ){

    if(this.status === 200) {
        const joke = JSON.parse(this.responseText).value; 
        //// create text node 
        div.innerHTML = joke
    }else{
        div.innerHTML = 'something went wrong (thats not funny)'; 
    }
 
   
  }
}


xhr.send()

}

btn.addEventListener('click',addJoke); 
document.addEventListener('DOMContentLoaded',addJoke)