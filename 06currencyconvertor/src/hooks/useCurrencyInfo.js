import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/exchange-api@latest/v1/currencies/eur.json
`)
                const result = await res.json()
                setData(result[currency])
            } catch (error) {
                console.error("Error fetching currency info:", error)
                setData({})
            }
        }

        fetchData()
    }, [currency])

    return data
}

export default useCurrencyInfo