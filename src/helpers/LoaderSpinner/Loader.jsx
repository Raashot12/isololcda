import React from "react"
import "./Loader.scss"
const Loader = () => {
  const [spinner, setSpinner] = React.useState(true)
  // It will be executed before rendering
  React.useEffect(() => {
    const id = setTimeout(() => setSpinner(false), 1000)

    return () => {
      clearTimeout(id)
    }
  }, [])
  return (
    <>
      {spinner && (
        <div class="preloader-area">
          <div class="spinner">
            <div class="inner">
              <div class="disc"></div>
              <div class="disc"></div>
              <div class="disc"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Loader
