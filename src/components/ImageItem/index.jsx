import React, { useState } from 'react';

function ImageItem(props) {
	const [showImageButtons, setShowImageButtons] = useState(false);

	return (
		<div
			className="image-item-box"
			onMouseEnter={() => {
				setShowImageButtons(true);
			}}
			onMouseLeave={() => {
				setShowImageButtons(false);
			}}>
			<div className="image-item">
				<img src={props.image.data_url} className="image" alt="" />
				{showImageButtons && (
					<div className="image-item__btn-wrapper">
						<button
							className="image-item__btn"
							onClick={(e) => {
								props.onImageUpdate(props.index);
							}}>
							更換
						</button>
						<button
							className="image-item__btn"
							onClick={(e) => {
								props.onImageRemove(props.index);
							}}>
							移除
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ImageItem;
