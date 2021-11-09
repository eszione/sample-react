import { RouteObject } from 'react-router';
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
        element: <App />
    }
]