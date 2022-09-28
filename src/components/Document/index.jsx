import React, { useState, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './styles.css';
import Title from '../Parts/Title';
import RowHeader from '../Parts/RowHeader';
import RowItem from '../Parts/RowItem';
import ImageUploader from '../ImageUploader';
import Modal from '../Modal';
import PdfDocument from '../PdfDocument';
import logo from '../../images/logo.svg';

const Document = () => {
	const [itemRowDataArray, setItemRowDataArray] = useState([]);
	const [showImageUploader, setShowImageUploader] = useState(false);
	const [images, setImages] = React.useState([]);
	const [title, setTitle] = useState('');
	const [dateTitle, setDateTitle] = useState('');
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setItemRowDataArray(
			itemRowDataArray.map((item, index) => {
				return { ...item, val1: index + 1 };
			}),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemRowDataArray.length]);

	const handleSetImages = (imageList) => {
		setImages(imageList);
	};

	const handleSetTitle = (val) => {
		setTitle(val);
	};

	const handleSetDateTitle = (val) => {
		setDateTitle(val);
	};

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

	const handleExportPdf = () => {
		setShowModal(true);
		// console.log(itemRowDataArray);
		// console.log(images);
		// console.log(title);
		// console.log(dateTitle);
	};

	return (
		<div className="document">
			<div>
				<img className="logo" src={logo} alt="logo" />
				<div className="upload-btn" onClick={() => setShowImageUploader(true)}>
					附加照片
				</div>
				<div className="export-btn" onClick={() => handleExportPdf()}>
					匯出
				</div>
			</div>
			<div className="titlesWrap">
				<Title
					len={500}
					ph="請輸入標題"
					handleSetTitle={handleSetTitle}
					type={1}
				/>
				<Title
					len={200}
					ph="請輸入日期"
					handleSetDateTitle={handleSetDateTitle}
					type={2}
				/>
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
					<ImageUploader
						closeUploader={handleCloseImageUploader}
						handleSetImages={handleSetImages}
					/>
				)}
			</div>
			<Modal
				showModal={showModal}
				closeModal={() => {
					setShowModal(false);
				}}
				children={
					<div className="exportPage">
						<PDFViewer>
							<PdfDocument
								data={[title, dateTitle, itemRowDataArray, images]}
							/>
						</PDFViewer>
					</div>
				}
			/>
		</div>
	);
};

export default Document;
