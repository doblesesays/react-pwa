import React from "react"

export default class Offline extends React.Component {

    constructor(props) {
        super(props)
        this.state = { onLine: navigator ? navigator.onLine : true }
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.goOnline)
        window.removeEventListener('offline', this.goOffline)
    }

    componentDidMount() {
        if (!window) return
        window.addEventListener('online', this.goOnline)
        window.addEventListener('offline', this.goOffline)
    }

    goOnline = () => this.setState({onLine:true})
    goOffline = () => this.setState({onLine:false})

    render() {
        const { children } = this.props
        const { onLine } = this.state

        if(onLine) return null
        return <span style={{color:'red', alignConten:'center'}}>{ children }</span>
    }
}