import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Error404 from './routes/error_404';
import Dashboard from './pages/Dashboard';
import CatatKehadiran from './pages/CatatKehadiran';
import LaporanKehadiran from './pages/LaporanKehadiran';

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element : <Root />,
        errorElement : <Error404 />,
        children:[
            { index: true, element: <Dashboard/> },
            { 
                path:'/kehadiran',
                element:<CatatKehadiran/>,
            },
            { 
                path:'/laporan',
                element:<LaporanKehadiran/>,
            }
        ]
    }
]);

export default AppRouter;