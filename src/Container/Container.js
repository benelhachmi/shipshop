import React from 'react';


import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import Home from '../Component/Homme/Home';
//component


import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'

//store

import store from '../store';




const Container = () => {
    return (
        <Provider store={store}>
     <BrowserRouter>   
    <Switch> 
        <Header/>
        </Switch> 
    <Switch
    ><Footer/></Switch>
    <Switch>
  
        <Route exact path={'/'} render={() => {
       return <Redirect to={'/products'}/>
        }}/>
    <Route exact path={'/products'} component={Home}/>
  


    </Switch>
      </BrowserRouter>
    </Provider>
    );
}

export default Container;
