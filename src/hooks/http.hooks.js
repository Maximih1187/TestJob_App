import { useState, useCallback } from "react"

export const useHttp = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const request = useCallback(async (url,
            method = 'GET',
            body,
            headers = { "Content-Type": "application/json" }
      ) => {
            setLoading(true)

            try {
                  const response = await fetch(url,
                        {
                              method: method,
                              body: JSON.stringify(body),
                              headers: headers
                        })

                  if (!response.ok) {
                        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                  }
                  const data = await response.json()

                  setLoading(false)
                  return data;
            } catch (e) {
                  setError(e.message)
                  setLoading(false)
                  throw e;
            }
      }, []);

      const clearError = useCallback(() => {
            setError(null)
      }, [])

      return { loading, request, error, clearError }
};
