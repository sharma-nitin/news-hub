import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Menu } from 'semantic-ui-react';
import errImg from './nonews.png';
import { URL, PAGE_SIZE } from './constants/constants';
import { itemsFetchData, changePage,itemsFetchHeadline } from './actions';
import Main from './components/Main';
import './App.css';

class App extends Component {  

  componentDidMount() {
    this.props.fetchData(URL+"&pageSize="+PAGE_SIZE
    +"&page="+this.props.activePage+"&apiKey=d1d633d73e734ea6824f0168b50f3d38")

    this.props.fetchHeadline(URL+"&pageSize="+3
    +"&page="+this.props.activePage+"&apiKey=d1d633d73e734ea6824f0168b50f3d38")
  }

  componentDidUpdate(prevProps) {
    if(this.props.activePage!==prevProps.activePage) {
        this.props.fetchData(URL+"&pageSize="+PAGE_SIZE
        +"&page="+this.props.activePage+"&apiKey=d1d633d73e734ea6824f0168b50f3d38")
    }
  }


  render() {
    if(this.props.status!=="error") {
      return (
      <div>
        <Menu >
          <Container className="center">
            <p className="heading">News Hub</p>
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
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchHeadline: (url) => dispatch(itemsFetchHeadline(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
