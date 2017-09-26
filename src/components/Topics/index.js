import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Nav, NavItem } from 'react-bootstrap'

import './styles.css'
import Topic from '../Topic'

function handleSelect (eventKey, event) {
  console.log(eventKey)
  console.log(event)
} 

const Topics = ({ match }) => (
  <div>
      <div className='Topics-sidebar-left'>
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </div>
      <div className='Topics-sidebar-left'>
        <h2>Topics</h2>
        <ul>
        <li>
            <Link to={`${match.url}/rendering`}>
            Rendering with React
            </Link>
        </li>
        <li>
            <Link to={`${match.url}/components`}>
            Components
            </Link>
        </li>
        <li>
            <Link to={`${match.url}/props-v-state`}>
            Props v. State
            </Link>
        </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
  </div>
)

export default Topics
