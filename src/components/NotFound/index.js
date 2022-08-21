import './index.css'

const NotFound = props => {
  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-bg-container">
      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/dkvm2gt6m/image/upload/v1660822379/6342468_hemppx.jpg"
          alt="not-found-pic"
          className="not-found-image"
        />
        <h1 className="not-found-heading">PAGE NOT FOUND</h1>
        <p className="not-found-description">
          we are sorry,the page you requested could not be found Please go back
          to the homepage
        </p>
        <div className="button-container">
          <button type="button" className="home-button" onClick={goToHome}>
            Home
          </button>
        </div>
      </div>
    </div>
  )
}
export default NotFound
