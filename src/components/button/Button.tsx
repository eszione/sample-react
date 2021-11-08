import "./button.sass";
import React from "react";
import { IButtonProps } from "./button-props";
import { connect } from "react-redux";
import { decrement, increment } from "./button-slice";
import { RootState } from "../../store";

export class Button extends React.Component<IButtonProps> {
    render(): JSX.Element {
        return (
            <div>
                <div>Count: {this.props.count}</div>
                <span>{this.props.text}</span>
                <button onClick={this.incrementCount.bind(this)}>+</button> 
                <button onClick={this.decrementCount.bind(this)}>-</button> 
            </div>
        );
    }

    decrementCount = () => {
        this.props.decrement();
    }

    incrementCount = () => {
        this.props.increment();
    }
}

const mapStateToProps = (state: RootState) => {
    return { count: state.counter.count };
}

const mapDispatchToProps = {
    increment,
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);