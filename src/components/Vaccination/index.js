import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Vaccination extends Component {
  renderLoader = () => (
    <>
      <div className="loader-container" testid="aboutRouteLoader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  render() {
    return (
      <>
        <Header />
        <div className="vaccine-main-container">
          <div className="vaccine-content-container">
            <h1 className="vaccine-title">Vaccination</h1>
            <p className="vaccination-description">
              COVID-19 vaccines be ready for distribution
            </p>
            <p className="vaccination-description">
              sorry, This page is Under Construction
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Vaccination
