export const getRandomInt = () => {
    return new Promise((resolve) => {
        const rndtInt = Math.floor(Math.random() *20+1)
        setTimeout(()=> {
            resolve(rndtInt)
        },1000)
    })
}