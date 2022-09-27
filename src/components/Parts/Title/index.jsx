import React from 'react';
import { useState } from 'react';
import './styles.css';

const Title = () => {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState('請輸入內容請輸入內容請輸入內容');

	return editMode ? (
		<div>
			<input type="text" />
		</div>
	) : (
		<div className="title">
			<div>{title}</div>
		</div>
	);
};

export default Title;
