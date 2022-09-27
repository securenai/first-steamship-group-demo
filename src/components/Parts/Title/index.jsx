import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './styles.css';

const Title = (props) => {
	// const inputRef = useRef(null);
	const len = props.len;
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(props.ph);
	const [inputVal, setInputVal] = useState('');

	useEffect(() => {
		if (inputVal) {
			setTitle(inputVal);
		} else {
			setTitle(props.ph);
		}
	}, [inputVal]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			setEditMode(false);
		}
	};

	return (
		<div
			className={`title ${inputVal ? 'titleBlack' : ''}`}
			onClick={() => {
				setEditMode(true);
			}}>
			{editMode ? (
				<input
					className={`inputStyles input-${len}`}
					type="text"
					value={inputVal}
					onBlur={() => {
						setEditMode(false);
					}}
					onKeyDown={handleKeyDown}
					onChange={(e) => setInputVal(e.target.value)}
					autoFocus
				/>
			) : (
				title
			)}
		</div>
	);
};

export default Title;
