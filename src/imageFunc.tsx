import logo from './logo.svg';

export default function ImageFunc(props: {altText: string}): JSX.Element {
    return (<img src={logo} className="App-logo" alt={props.altText} />);
}