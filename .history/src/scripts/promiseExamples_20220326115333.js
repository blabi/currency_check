const recipe = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dostałem kebaba');
    }, 1000);
    setTimeout(() => {
        reject('Oszukali mnie');
    }, 1000)
})

recipe
    .then((kebab) => {
    console.log(kebab)
    .catch((fraud) => {
    console.log(fraud)
    })

})