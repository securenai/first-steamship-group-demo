import React, { useState } from 'react';
import './styles.css';
import Title from '../Parts/Title';
import RowHeader from '../Parts/RowHeader';
import RowItem from '../Parts/RowItem';
import logo from '../../images/logo.svg';

const Document = () => {
	const [itemRowDataArray, setItemRowDataArray] = useState([]);

	const handleAddItem = () => {
		console.log('add item');
		setItemRowDataArray([
			...itemRowDataArray,
			[{ id: itemRowDataArray.length, val1: '', val2: '' }],
		]);
	};

	return (
		<div className="document">
			<div>
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div className="titlesWrap">
				<Title len={500} ph="請輸入標題" />
				<Title len={200} ph="請輸入日期" />
			</div>

			<div className="documentContent">
				<RowHeader len={itemRowDataArray.length} onAddItem={handleAddItem} />
				{itemRowDataArray.map((item, index) => {
					return (
						<RowItem
							key={index}
							data={item}
							isLast={itemRowDataArray.length === index + 1}
							onAddItem={handleAddItem}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Document;
