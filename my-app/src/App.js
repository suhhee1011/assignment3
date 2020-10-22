import React, { useState, useEffect } from 'react';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Sales from './Sales';
import { render } from 'react-dom';

function App() {
  const[recentlyViewed, searchID] = useState([{ recentlyViewed: [], searchID: "" }]);

  function viewedSale(id)
  {
    let target = id.target;
    let name = target.name;
    let value = target.value;
    let allRecentlyViewed = { ...recentlyViewed };
    if (recentlyViewed.indexOf(id) === -1) {
      allRecentlyViewed.push(id.target.value);
    }
    recentlyViewed(allRecentlyViewed);
  }

  function updateSearchId(e)
  {
     searchID(e.target.value);
  }
  render()
  {
  return (
    <div>
      <Navbar inverse collapseOnSelect staticTop>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              WEB422 - Sales
    </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/Sales">
              <NavItem>All Sales</NavItem>
            </LinkContainer>
            <NavDropdown title="Previously Viewed" id="basic-nav-dropdown">
              {recentlyViewed.length > 0 ?
                recentlyViewed.map((id, index) => (
                  <LinkContainer to={`/Sale/${id}`} key={index}>
                    <MenuItem >Sale: {id}</MenuItem>
                  </LinkContainer>)) :
                <MenuItem>...</MenuItem>}
            </NavDropdown>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" onChange={updateSearchId} placeholder="Sale ID" />
            </FormGroup>{' '}
            <Link className="btn btn-default" to={"/Sale/" + searchID}>Search</Link>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
      <Grid>
        <Row>
          <Col md={12}>
          <Route exact path="/" render={()=>{
          <Sales/>
        }}/>
        <Route exact path="Sales" render={()=>{
          <Sale/>
        }}/>
          <Route path="Sales/:id" render={(props)=>(
          <Sale id={props.match.params.id}
                viewedSale ={this.viewedSale}/>
          )}/>
        <Route render={()=>{
          <NotFound/>
        }}/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
}

export default App;
