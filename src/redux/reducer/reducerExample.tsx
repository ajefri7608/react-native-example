import { createStore } from 'redux'

const store = createStore(reducer)

const initState = {
    name: 'Jack',
}
const reducer = (state = initState, action) => {
    switch (action.type){
        default:
            return state 
    }
}

const mapStateToProps = state => ({
    name: state.name
})

