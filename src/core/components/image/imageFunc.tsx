import './imageFunc.sass';
import logo from '../../../assets/logo.svg';

export default function ImageFunc(props: {altText: string}): JSX.Element {
    return (<img src={logo} className="image-logo" alt={props.altText} />);
}