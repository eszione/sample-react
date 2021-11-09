import { useNavigate } from "react-router-dom";

export default function NavButton(props: { to: string, text: string }): JSX.Element {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(props.to)}>Navigate to {props.text}</button>
        </div>
    );
}