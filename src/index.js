import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class ReactTips extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tips: this.props.tips,
            currentShowingTip: this.props.tips[0],
        }
    }

    componentDidMount() {
        let counter = 1
        const interval = this.props.interval

        this.intervalFunc = setInterval(() => {
            this.setState({ currentShowingTip: this.state.tips[counter] }, () => {
                if (counter === this.state.tips.length - 1) counter = 0
                else counter += 1
            })
        }, interval)
    }

    componentWillUnmount() {
        clearInterval(this.intervalFunc)
    }

    render() {
        return <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{this.state.currentShowingTip}</span>
    }
}

ReactTips.propTypes = {
    tips: PropTypes.arrayOf(PropTypes.string),
    interval: PropTypes.number
}

ReactTips.defaultProps = {
    tips: [],
    interval: 10000
}

export default ReactTips
