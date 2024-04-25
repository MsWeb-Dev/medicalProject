import './App.css'

// page
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// react router dom
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
// layout
import RootLayout from './layout/RootLayout'
function App() {
	const routes = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout></RootLayout>}>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/contact' element={<Contact></Contact>}></Route>
			</Route>
		)
	)
	return (
		<>
			<RouterProvider router={routes}></RouterProvider>
		</>
	)
}

export default App
