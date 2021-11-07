import React from "react";
import { IParagraph } from "./paragraph-props";

export default class Paragraph extends React.Component {
    render(): JSX.Element {
        return (
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        );
    }
}

export class ParagraphLearn extends React.Component<IParagraph> {
    render(): JSX.Element {
        return (
            <p>
                <a 
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {this.props.learnText ?? "Learn React"}
                </a>
            </p>
        );
    }
}