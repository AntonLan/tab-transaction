import { createBrowserRouter } from 'react-router-dom'
import ListPage from '@/components/pages/ListPage'
import SummaryPage from '@/components/pages/SummaryPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <SummaryPage />
	},
	{
		path: '/:navigator',
		element: <ListPage />
	}
])