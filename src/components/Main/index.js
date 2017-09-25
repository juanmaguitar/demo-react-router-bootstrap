import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import Home from '../Home'
import About from '../About'
import Topics from '../Topics'

const Main = () => (
  <Router>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to='/about'>
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to='/topics'>
            <NavItem>Topics</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      
    </div>
  </Router>
)

export default Main
