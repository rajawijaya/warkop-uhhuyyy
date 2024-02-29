import "./App.scss"
import cart from "./assets/shopping-cart.svg"

const App = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-choco fw-bold h-20">
        <div className="container ">
          <a className="navbar-brand text-cream " href="#">Warkop Uhhuyyy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-cream nav nav-underline">
              <li className="nav-item text-cream">
                <a className="nav-link active text-cream" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-cream" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-cream" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu bg-dark-choco">
                  <li><a className="dropdown-item text-cream fw-bold" href="#">Action</a></li>
                  <li><a className="dropdown-item text-cream" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider cream" /></li>
                  <li><a className="dropdown-item text-cream" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-choco" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
