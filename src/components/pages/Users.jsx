import React from 'react'

import logo from '../../images/logo.svg';
import user1 from '../../images/placeholders/user-1.jpg';
import user2 from '../../images/placeholders/user-2.jpg';
import user3 from '../../images/placeholders/user-3.jpg';

export default function Users() {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="blogs-screen">
        <h1>Blogs</h1>

        <div className="blogs-screen__list">
          <a href="#" className="blogs-screen__list-item">
            <div className="blogs-screen__list-item-photo">
              <img
                src={user1}
                className="responsive avatar"
                alt=""
              />
            </div>
            <div className="blogs-screen__list-item-name">John Walter</div>
          </a>
          <a href="#" className="blogs-screen__list-item">
            <div className="blogs-screen__list-item-photo">
              <img
                src={user2}
                className="responsive avatar"
                alt=""
              />
            </div>
            <div className="blogs-screen__list-item-name">Chris Hudson</div>
          </a>
          <a href="#" className="blogs-screen__list-item">
            <div className="blogs-screen__list-item-photo">
              <img
                src={user3}
                className="responsive avatar"
                alt=""
              />
            </div>
            <div className="blogs-screen__list-item-name">Bryan Cornell</div>
          </a>
        </div>
      </div>

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  )
}
