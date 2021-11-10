import { useNavigate } from "react-router-dom";
import { INavButtonProps } from "./nav-button-props";

export default function NavButton(props: INavButtonProps): JSX.Element {
    const navigate = useNavigate();

    function onNavigate(): void {
        if (props.goBack) {
            navigate(-1);
        } else if (props.to) {
            navigate(props.to);
        } else {
            console.log('Please supply to or goback props');
        }
    }

    return (
        <div>
            <button onClick={() => onNavigate()}>Navigate to {props.text}</button>
        </div>
    );
}