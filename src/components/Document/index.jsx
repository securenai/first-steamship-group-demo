import React, { useState, useEffect } from 'react';
import './styles.css';
import Title from '../Parts/Title';
import RowHeader from '../Parts/RowHeader';
import RowItem from '../Parts/RowItem';
import ImageUploader from '../ImageUploader';
import logo from '../../images/logo.svg';

const Document = () => {
	const [itemRowDataArray, setItemRowDataArray] = useState([]);
	const [showImageUploader, setShowImageUploader] = useState(false);

	useEffect(() => {
		setItemRowDataArray(
			itemRowDataArray.map((item, index) => {
				return { ...item, val1: index + 1 };
			}),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemRowDataArray.length]);

	const handleCloseImageUploader = () => {
		setShowImageUploader(false);
	};

	const handleAddItem = () => {
		setItemRowDataArray([
			...itemRowDataArray,
			{
				id: new Date().valueOf(),
				val1: itemRowDataArray.length + 1,
				val2: '',
			},
		]);
	};

	const handleDeleteItem = (id) => {
		setItemRowDataArray(itemRowDataArray.filter((item) => item.id !== id));
	};

	const handleUpdateItem = (id, val) => {
		setItemRowDataArray(
			itemRowDataArray.map((item) => {
				if (item.id === id) {
					return { ...item, val2: val };
				}
				return item;
			}),
		);
	};

	return (
		<div className="document">
			<div>
				<img className="logo" src={logo} alt="logo" />
				<div className="upload-btn" onClick={() => setShowImageUploader(true)}>
					附加照片
				</div>
			</div>
			<div className="titlesWrap">
				<Title len={500} ph="請輸入標題" />
				<Title len={200} ph="請輸入日期" />
			</div>

			<div className="documentContent">
				<div>
					<RowHeader len={itemRowDataArray.length} onAddItem={handleAddItem} />
					{itemRowDataArray.map((item, index) => {
						return (
							<RowItem
								key={index}
								data={item}
								isLast={itemRowDataArray.length === index + 1}
								onAddItem={handleAddItem}
								onDeleteItem={handleDeleteItem}
								onUpdateItem={handleUpdateItem}
							/>
						);
					})}
				</div>
				{showImageUploader && (
					<ImageUploader closeUploader={handleCloseImageUploader} />
				)}
			</div>
		</div>
	);
};

export default Document;
