import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Menu } from 'semantic-ui-react';
import errImg from './nonews.png';
import { URL, PAGE_SIZE } from './constants/constants';
import { itemsFetchData, changePage } from './actions';
import Main from './components/Main';
import './App.css';

class App extends Component { 
  componentDidMount() {
    this.props.fetchData(URL+"&pageSize="+PAGE_SIZE
    +"&page="+this.props.activePage+"&apiKey=5f98a99c08c34b8ea53baa592aad5114")
  }

  componentDidUpdate(prevProps) {
    if(this.props.activePage!==prevProps.activePage) {
        this.props.fetchData(URL+"&pageSize="+PAGE_SIZE
        +"&page="+this.props.activePage+"&apiKey=5f98a99c08c34b8ea53baa592aad5114")
    }
  }


  render() {
    if(this.props.status!=="error") {
      return (
      <div>
        <Menu fluid stackable inverted color="teal">
          <Container>
            <Menu.Item as='a' href=" " header className="title">
              News Hub
            </Menu.Item>
          </Container>
        </Menu>
        <Main />
      </div>  
      );
    }
    else {
        return (
          <div style={{marginTop:'10px',
            display:'flex',flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}
          >
            <Image src={errImg} size="big" centered />
            <h1 style={{textAlign:'center'}}><br/>No News Available</h1>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    totalResults: state.data.totalResults,
    activePage: state.activePage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (activePage) => dispatch(changePage(activePage)),
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
