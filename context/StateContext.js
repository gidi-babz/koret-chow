import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [isSticky, setIsSticky] = useState(false);

	return (
		<Context.Provider
			value={{
				isSticky,
				setIsSticky,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
