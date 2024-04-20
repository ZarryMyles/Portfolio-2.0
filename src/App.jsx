import './App.css'

// Components
import DarkModeToggler from './components/DarkModeToggler'

function App() {
	return (
		<div id='main'>
			<div className='bg-slate-300 dark:bg-slate-800 text-black dark:text-white min-w-screen min-h-screen flex justify-center items-center bg-transparent'>
				<DarkModeToggler />
				Helluva World
			</div>
		</div>
	)
}

export default App
