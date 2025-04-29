import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [userData, setUserData] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId")

      if (!userId) {
        console.error("User ID not found in localStorage")
        return
      }

      try {
        const response = await fetch(`http://localhost:3000/api/v1/financeData/${userId}`)
        if (!response.ok) {
          throw new Error("Data fetch failed")
        }

        const data = await response.json()
        console.log(data)
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoadingData(false)
      }
    }

    fetchUserData()
  }, [])

  const handlePayment = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsPaid(true)
    } catch (error) {
      console.error("Payment failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (loadingData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-pink-50 text-purple-700">
        Loading user data...
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-pink-50 text-red-600">
        No data found for this user.
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Loan Payment Portal</h1>

        <div className="bg-white rounded-lg overflow-hidden border border-purple-200 shadow-lg">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-t-lg">
            <h2 className="text-xl font-bold">Loan Payment Details</h2>
            <p className="text-pink-100 text-sm mt-1">Review your information and make a payment</p>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-purple-600">Name</p>
              <p className="font-medium">{userData.name}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-purple-600">CNIC Number</p>
              <p className="font-medium">{userData.cnic}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-purple-600">Loan ID</p>
              <p className="font-medium">{userData.loanId}</p>
            </div>

            <div className="h-[1px] w-full bg-pink-100 my-4"></div>

            <div className="rounded-lg bg-purple-50 p-4 border border-pink-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-700">Deposit Amount</span>
                <span className="text-xl font-bold text-pink-600">
                  Rs. {userData.deposit?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-purple-50">
            {isPaid ? (
              <div className="w-full text-center p-4 bg-pink-50 rounded-md text-pink-600 border border-pink-200">
                Payment successful! Thank you.
              </div>
            ) : (
              <button
                className="w-full py-3 px-4 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium flex items-center justify-center disabled:opacity-70"
                onClick={handlePayment}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      ></path>
                    </svg>
                    Pay Deposit Amount
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
