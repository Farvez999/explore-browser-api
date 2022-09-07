console.log('dhash')
const showAlret = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('Ki khobor dost')
    }
}

const askSomthing = () => {
    const dicition = confirm('Are you Exit?')
    console.log(dicition)
    if (dicition == true) {
        alert('Tahole 400 tk bkash kor')
    }
    else {
        alert('DGM')
    }
}

const getInfo = () => {
    const name = prompt('Tell me you name.')
    console.log(name)
}