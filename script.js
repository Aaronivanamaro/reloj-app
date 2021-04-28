//Theme Selector

function changeTheme () {
    let selectElement = document.getElementById("select-theme");
    let newTheme = selectElement.options[selectElement.selectedIndex].value;
    if (newTheme === "family") {
        document.body.classList.add('family-theme')
        document.body.classList.remove('frozen-theme')
        document.body.classList.remove('tropical-theme')
        document.body.classList.remove('romantic-theme')
        gsap.fromTo('body', {opacity: 0, backgroundColor: '#FFF'}, {opacity: 1, backgroundColor: '#0a0a0a', duration: 0.5})        
        gsap.fromTo('.n-container', {opacity: 0.5, backgroundColor: 'rgba(202, 106, 27, 0.95)'}, {opacity: 1, backgroundColor:'rgba(0,0,0,0.4)', duration: 2.5})
    } else if 
        (newTheme === "frozen") {
        document.body.classList.add('frozen-theme')
        document.body.classList.remove('family-theme')
        document.body.classList.remove('tropical-theme')
        document.body.classList.remove('romantic-theme')
        gsap.fromTo('body', {opacity: 0, backgroundColor: '#FFF'}, {opacity: 1, backgroundColor: '#0a0a0a', duration: 0.5})        
        gsap.fromTo('.n-container', {opacity: 0.5, backgroundColor: 'rgba(52, 174, 211, 0.95)'}, {opacity: 1, backgroundColor:'rgba(0,0,0,0.4)', duration: 2.5})
    } else if 
        (newTheme === "tropical") {
        document.body.classList.add('tropical-theme')
        document.body.classList.remove('frozen-theme')
        document.body.classList.remove('family-theme')
        document.body.classList.remove('romantic-theme')
        gsap.fromTo('body', {opacity: 0, backgroundColor: '#FFF'}, {opacity: 1, backgroundColor: '#0a0a0a', duration: 0.5})        
        gsap.fromTo('.n-container', {opacity: 0.5, backgroundColor: 'rgba(52, 211, 52, 0.95)'}, {opacity: 1, backgroundColor:'rgba(0,0,0,0.4)', duration: 2.5})
    } else if 
        (newTheme === "romantic") {
        document.body.classList.add('romantic-theme')
        document.body.classList.remove('frozen-theme')
        document.body.classList.remove('tropical-theme')
        document.body.classList.remove('family-theme')
        gsap.fromTo('body', {opacity: 0, backgroundColor: '#FFF'}, {opacity: 1, backgroundColor: '#0a0a0a', duration: 0.5})        
        gsap.fromTo('.n-container', {opacity: 0.5, backgroundColor: 'rgba(173, 42, 42, 0.95)'}, {opacity: 1, backgroundColor:'rgba(0,0,0,0.4)', duration: 2.5})
    } 
}

//Watch

const firstHand = document.querySelector('.first-hand');
const secondHand = document.querySelector('.second-hand');
const thinHand = document.querySelector('.thin-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    thinHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transform = `rotate(${minutesDegrees}deg)`;    
    firstHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);