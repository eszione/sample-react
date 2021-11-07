import "./button.sass";
import React from "react";
import { IButtonProps } from "./button-props";
import { IButtonState } from "./button-state";

export default class Button extends React.Component<IButtonProps> {
    state: IButtonState = {
        count: 0,
    };
    
    render(): JSX.Element {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.incrementCount.bind(this)}>{this.props.text}</button><br /> 
            </div>
        );
    }

    private incrementCount(): void {
        this.setState({count: this.state.count + 1});
    }
}