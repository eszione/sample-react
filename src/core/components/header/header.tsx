import ImageFunc from '../image/imageFunc';
import './header.sass';

export default (): JSX.Element => {
    return (
        <header className="header">
            <div>Sample React App</div>
            <ImageFunc altText="logo" />
        </header>
    );
}