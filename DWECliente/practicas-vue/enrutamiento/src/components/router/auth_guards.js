const autentication = (to,from,next) => {
    return new Promise(resolve => {
    const random = Math.random()*100
      console.log(random)
      if (random > 50){
        console.log("estas autentificado")
        next()
      } else {
        console.log("NO estas autentificado")
        next({name: "error"})
      }
    })
  }

  export default autentication