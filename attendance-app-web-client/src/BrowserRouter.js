import { createBrowserRouter } from 'react-router-dom';
import Root, {loader as RootLoader} from './routes/root';
import Login, {action as LoginAction} from './pages/Login';
import Error404 from './routes/error_404';
import Dashboard, {action as DashboardAction} from './pages/Dashboard';
import CatatKehadiran, {loader as CatatKehadiranLoader, action as CatatKehadiranAction} from './pages/CatatKehadiran';
import ProtectedRoutes, {loader as ProtectedRoutesLoader} from './routes/ProtectedRoutes';
import LaporanKehadiran from './pages/LaporanKehadiran';

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element : <Root />,
        errorElement : <Error404 />,
        children:[
            {
                element:<ProtectedRoutes />,
                loader: ProtectedRoutesLoader,
                children:[
                    {
                        index: true,
                        element: <Dashboard/>,
                    },
                    {
                        path:'/kehadiran',
                        loader: CatatKehadiranLoader,
                        action: CatatKehadiranAction,
                        element:<CatatKehadiran/>,
                    },
                    {
                        path:'/laporan',
                        element:<LaporanKehadiran/>,
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        element:<Login />,
        action: LoginAction,
        errorElement:<Error404 />
    }
]);

export default AppRouter;