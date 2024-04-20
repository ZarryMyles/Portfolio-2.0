import { useState, useEffect } from 'react'

export default function useDarkSide() {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' //Checks if user prefers dark mode
	const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : prefersDark)
	const textColor = theme === 'dark' ? 'light' : 'dark'
	localStorage.setItem('theme', theme)

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(textColor)
		root.classList.add(theme)
		if (localStorage.theme == 'dark') localStorage.removeItem('theme')
		else localStorage.setItem('theme', theme)
	}, [theme, textColor])

	return [textColor, setTheme]
}
