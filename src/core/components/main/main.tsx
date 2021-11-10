import './main.sass';

export default (props: { children: JSX.Element }): JSX.Element => {
    return (
        <div className="main">
            {props.children}
        </div>
    );
}