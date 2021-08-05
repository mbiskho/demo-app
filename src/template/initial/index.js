/*
|--------------------------------------------------------------------------
| React  Fucntional Component : pure
|--------------------------------------------------------------------------
|
| Here is react fucntional in pure templating
| you can add many thing you want
| 
|
*/


import React,{Component} from 'react';
import Styles from "./styles";


export function Index() {
    return (
        <Styles>
            
        </Styles>
    )
}



/*
|--------------------------------------------------------------------------
| React  Class Component : pure
|--------------------------------------------------------------------------
|
| Here is react class component you can use in this section
| you can add many thing you want
| 
|  Note : suggested using this style 
*/

import React, { Component } from 'react'
import Styles from "./styles";


export default class Index extends Component {
    render() {
        return (
            <Styles>
                
            </Styles>
        )
    }
}



/*
|--------------------------------------------------------------------------
| React Functional Component : Using redux templating
|--------------------------------------------------------------------------
|
| Here is react-redux templating 
| you can add such dispacth and state from redux in here
| 
| 
*/


import React from 'react'
import { connect } from 'react-redux'
import Styles from "./styles";


export const Index = (props) => {
    return (
        <Styles>
            
        </Styles>
    )
}

const mapStateToProps = (state) => ({
    // Add state want you want
})

const mapDispatchToProps = {
    // Add dispacth fucntional you want to dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)


/*
|--------------------------------------------------------------------------
| React Functional Component : Using redux templating + propTypes
|--------------------------------------------------------------------------
|
| A highly fucntional templating for highly page and reusable component
| it contains redux & proptype so it made filtering easier
| 
| 
*/

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Styles from "./styles";

export const Index = (props) => {
    return (
        <Styles>
            
        </Styles>
    )
}

index.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
