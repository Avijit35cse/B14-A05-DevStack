import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technology/Technologies"
import { ToastContainer } from "react-toastify"
import type { Itech } from "./components/types/TechType"
import Footer from "./components/Footer"


function App() {

    const dataFetch = async (): Promise<Itech[]> => {
      const res = await fetch("/data.json")
      const data = await res.json()
      return data
    }
  const techPromise = dataFetch()

  return (
    <>
      <Nav />
        <Banner />
          <Suspense fallback={<div className="flex items-center justify-center w-full">
            <span className="loading loading-spinner text-secondary"></span>
          </div>}>
            <Technologies techPromise={techPromise} />
            <ToastContainer
              autoClose={3000} />
          </Suspense>
          <Footer/>
    </>
  )
}

export default App
