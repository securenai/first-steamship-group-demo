import React from 'react';
import ImageUploading from 'react-images-uploading';
import del from '../../images/delete-btn.svg';
import ImageItem from '../ImageItem';
import './styles.css';

const ImageUploader = (props) => {
	const [images, setImages] = React.useState([]);
	const maxNumber = 9;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		setImages(imageList);
		props.handleSetImages(imageList);
	};

	return (
		<div className="ImageUploadSection">
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
				acceptType={['jpg', 'gif', 'png', 'svg']}>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<div className="delete" onClick={() => props.closeUploader()}>
							<img src={del} alt="Delete" />
						</div>
						<div
							className="upload__image-area"
							style={isDragging ? { backgroundColor: 'ghostwhite' } : null}
							onClick={(e) => {
								if (e.target.tagName === 'DIV') {
									onImageUpload();
								}
							}}
							{...dragProps}>
							<div style={{ fontSize: '14px' }}>點擊此處或將圖片拖拉至此</div>
							<div className="image-container">
								{imageList.map((image, index) => (
									<ImageItem
										key={index}
										image={image}
										index={index}
										onImageUpdate={onImageUpdate}
										onImageRemove={onImageRemove}
									/>
								))}
							</div>
						</div>
						<div className="btns-box">
							{imageList.length > 0 && (
								<div className="btn" onClick={onImageRemoveAll}>
									全部清除
								</div>
							)}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export default ImageUploader;
