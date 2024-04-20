import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../hooks/useDarkSide'

const DarkModeToggler = () => {
	const [colorTheme, setTheme] = useDarkSide()
	const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme)
		setDarkSide(checked)
	}

	return (
		<>
			<DarkModeSwitch
				className='fixed bottom-2 right-2 z-10'
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	)
}

export default DarkModeToggler
