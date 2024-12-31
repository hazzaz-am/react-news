import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthProvider'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/PublicRoutes';

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<RouterProvider router={router}/>
	</AuthProvider>
);
