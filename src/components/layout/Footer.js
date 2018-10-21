import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-1" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Dolor</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Adipisicing eveniet.</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Consectetur enim.</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Sit</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Lorem ipsum</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2018 Copyright kananthav
        </div>
      </div>
    </footer>
  )
}

export default Footer
