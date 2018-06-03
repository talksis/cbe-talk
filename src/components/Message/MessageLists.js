import React from 'react';
import { connect } from "react-redux";
import { getMessageAction } from '../../store/actions/messageAction';
import { decryptAES256WithSHA256Key } from '../../store/secret';

class MessaageLists extends React.Component {
    state = {}
    render() {
        this.props.getMessageAction(1,1)
        const text='2QtLzdULpvSgnoPSh1qlH9hLccTWEhmmZpdngC3A0faBInLcsr9SYPrH/frsNn6JNMQ5PR1l2y75Aocqqvoce35BjlbmOfRPRksQIG7zJPP5nGJeLEhqi3CttXqikwHI34queXw35DUeeH2u+bDF8rYCpItdldJJnYp4r7stBiQWXgxQzwUmTaMQzW0OybLK1y5ocgikxSGSqMlzgShQu08zhYSmjQeBBtasx4eTEWaAe7tnE5dRitXbrcNeZrDw+YODkSGsGw94ktel2RqMMw=='
        console.log(decryptAES256WithSHA256Key(text));
        return (
            <div>
                messageLists
            </div>
        );
    }
}

export default connect(null, {getMessageAction})(MessaageLists);