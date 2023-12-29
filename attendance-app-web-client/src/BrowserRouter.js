import { createBrowserRouter } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";
import AttendanceMenuPage from "./pages/AttendanceMenuPage";
import CatatKehadiran, {action as CatatKehadiranAction, loader as CatatKehadiranLoader} from "./pages/CatatKehadiran"

import Error404 from './routes/error_404';
import Login, {action as LoginAction} from './pages/Login';

import TokenProtector, {loader as TokenProtectorLoader} from './routes/TokenProtector';
import UserRoot, {loader as UserRootLoader} from './routes/UserRoot';
import AdminRoot from './routes/AdminRoot';
import SuperAdminRoot from './routes/SuperAdminRoot';
import LaporanPage from './pages/LaporanPage';


const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<TokenProtector />,
        loader: TokenProtectorLoader,
        errorElement: <Error404 />,
        children:[
            {
                path:'/user',
                loader: UserRootLoader,
                element: <UserRoot/>,
                children:[
                    {
                        index:true,
                        element:<Dashboard/>
                    },
                    {
                        path:'/user/kehadiran',
                        element:<AttendanceMenuPage/>
                    },
                    {
                        path:'/user/catat',
                        element:<CatatKehadiran/>,
                        action: CatatKehadiranAction,
                        loader: CatatKehadiranLoader,
                    },
                    {
                        path:'/user/laporan',
                        element:<LaporanPage/>
                    },
                ]
            },
            {
                path:'/admin',
                element: <AdminRoot/>,
                children:[
                    {
                        index:true,
                        element:<Dashboard/>
                    }
                ]
            },
            {
                path:'/superadmin',
                element: <SuperAdminRoot/>,
                children:[
                    {
                        index:true,
                        element:<Dashboard/>
                    }
                ]
            },
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