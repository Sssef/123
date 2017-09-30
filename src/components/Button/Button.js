import React from 'react';
import { classify } from '../Utils/Utils';
import './Button.sass';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        alert("Hello! This's ReactJS template.")
    }

    render() {
        const Tag = this.props.href ? 'a' : 'button';
        const className = classify('btn', this.props.className) + (this.props.disabled ? ' disabled' : '');

        return (
            <Tag {...this.props} className={className} onClick={this.handleClick}>{this.props.label || this.props.children}</Tag>
        );
    }
}

export default Button;
