import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Login, {action as LoginAction} from './pages/Login';
import Error404 from './routes/error_404';
import Dashboard, {action as DashboardAction} from './pages/Dashboard';
import CatatKehadiran, {loader as CatatKehadiranLoader} from './pages/CatatKehadiran';
import ProtectedRoutes from './routes/ProtectedRoutes';
import LaporanKehadiran from './pages/LaporanKehadiran';

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element : <Root />,
        errorElement : <Error404 />,
        children:[
            {
                element:<ProtectedRoutes />,
                children:[
                    { 
                        index: true,
                        element: <Dashboard/>,
                        action: DashboardAction,
                    },
                    { 
                        path:'/kehadiran',
                        loader: CatatKehadiranLoader,
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
        action: LoginAction,
        element:<Login />,
        errorElement:<Error404 />
    }
]);

export default AppRouter;