import {useState} from "react";
export const useFatching = (callback) => {
    const [isLoadin, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fatching = async () => {
        try {
            setIsLoading(true)
            await callback()
        }
        catch(e) {
            setError(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fatching, isLoadin, error]
}