import { useEffect, useState } from "react"

export const useFetch = (url)=> {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .finally(() => setLoading(false))
    }, [])
  return {data, loading}
}