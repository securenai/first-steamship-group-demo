import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

const RowInput = (props) => {
	// const inputRef = useRef(null);
	const len = props.len;
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(props.ph);
	// const [inputVal, setInputVal] = useState(props.data);

	useEffect(() => {
		if (props.data) {
			setTitle(props.data);
		} else {
			setTitle(props.ph);
		}
	}, [props.data, props.ph]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			setEditMode(false);
		}
	};

	return (
		<div
			className={`title2 ${props.data ? 'titleBlack2' : ''}`}
			onClick={() => {
				setEditMode(true);
			}}>
			{editMode ? (
				<input
					className={`inputStyles2 input-${len}`}
					type="text"
					value={props.data}
					onBlur={() => {
						setEditMode(false);
					}}
					onKeyDown={handleKeyDown}
					onChange={(e) => {
						props.doUpdate(props.id, e.target.value);
					}}
					// onChange={(e) => setInputVal(e.target.value)}
					autoFocus
				/>
			) : (
				title
			)}
		</div>
	);
};

export default RowInput;
