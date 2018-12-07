import React from 'react'
import {connect} from 'react-redux'

@connect(
    state=>({userObj:state.user})
)

class Fex extends React.Component{

    componentDidMount(){
        // redux对象监听待研究
        // this.props.state.subscribe(this.conso)
    }


    conso=()=>{
        console.log(12)
    }

    render(){
        this.conso()
        return(
            <div>
                <a href="javascript:void(0)">{JSON.stringify(this.props.userObj)}</a>
                <a href="javascript:void(1)">{this.props.gloomysw}</a>
            </div>
        )
    }
}

export default Fex