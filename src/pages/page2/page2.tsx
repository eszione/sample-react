import './page2.sass';
import React from "react";
import NavButton from "../../shared/nav-button/nav-button-func";

export class Page2 extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                Page2
                <NavButton to="/" text="Home" goBack={true} />
            </div>
        );
    }
}