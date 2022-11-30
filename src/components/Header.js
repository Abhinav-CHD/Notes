import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	const [toggleText,setToggleText] = React.useState("Dark Mode")
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={function() {
					setToggleText(prevVal => "Dark Mode" === prevVal?"Light Mode":"Dark Mode")
					return handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}}
				className='save'
			>
				{toggleText}
			</button>
		</div>
	);
};

export default Header;
