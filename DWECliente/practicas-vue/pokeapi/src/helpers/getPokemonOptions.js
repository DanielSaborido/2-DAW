// funcion que devuelve un array con 4 numeros al azar entre 1-649 (son los pokemons que tienen imagenes)

import pokemonAPI from '../api/pokemonApi'

const getPokemons = () => {
    const pokemonArr = Array.from(Array(649))
    return pokemonArr.map((arg,index) => index+1)
}

const getPokemonsName = async ([a,b,c,d] = []) => {
    const promiseArr = [
        pokemonAPI.get(`/${a}`),
        pokemonAPI.get(`/${b}`),
        pokemonAPI.get(`/${c}`),
        pokemonAPI.get(`/${d}`)
    ]
    const [pk1,pk2,pk3,pk4] = await Promise.all(promiseArr)

    return [
        {name:pk1.data.name, id:pk1.data.id},
        {name:pk2.data.name, id:pk2.data.id},
        {name:pk3.data.name, id:pk3.data.id},
        {name:pk4.data.name, id:pk4.data.id}
    ]
}

const getPokemonsOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random()-0.5)
    return getPokemonsName(mixedPokemons.splice(0,4))
}

export default getPokemonsOptions