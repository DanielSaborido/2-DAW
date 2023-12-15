const useFech = ({url}) => {
    const res = await fetch(url)
    const data = await res.json()

    return({data, error})
}

export default useFech