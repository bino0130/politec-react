import {Component} from 'react';

class MyComponentByClass extends Component {
    render() {
        const {name, children } = this.props;
        return (
            <div>
                First Component. My name is {name} <br/>
                children : {children}
            </div>
        )
    }
}

export default MyComponentByClass;