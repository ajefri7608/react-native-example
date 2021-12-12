import React from 'react'

import { connect } from 'react-redux';
class ConnectTitle extends React.Component {
    render(){
        return <h1>Hello!{this.props.name}</h1>
    }
}


const mapStateToProps = state => ({
    name: state.name
})