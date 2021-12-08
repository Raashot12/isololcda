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
        <div className="preloader-area">
          <div className="spinner">
            <div className="inner">
              <div className="disc"></div>
              <div className="disc"></div>
              <div className="disc"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Loader
