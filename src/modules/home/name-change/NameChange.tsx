import React from "react";
import { INameChangeProps } from "./name-change-props";
import { INameChangeState } from "./name-change-state";

export default class NameChange extends React.Component<INameChangeProps> {
    state: INameChangeState = {
        name: "",
    };
    
    render(): JSX.Element {
        return (
            <div>
                <div>Name: {this.props.name}</div>
                <input className="button-name-input" type="text" placeholder="Enter new name" onChange={this.nameChange.bind(this)} />
                <button onClick={this.nameChangeConfirmed.bind(this)}>Change name</button> 
            </div>
        );
    }

    private nameChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({name: e.target.value})
    }

    private nameChangeConfirmed(): void {
        if (this.state.name) {
            this.props.nameChangeConfirmed(this.state.name);
        }
    }
}