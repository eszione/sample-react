import { RouteObject } from 'react-router';
import { Page2 } from '../../pages/page2/page2';
import App from '../components/app/App';

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/child"
            }
        ]
    },
    {
        path: "page2",
        element: <Page2 />
    }
]