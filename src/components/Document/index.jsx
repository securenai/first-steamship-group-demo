import React from 'react';
import './styles.css';
import Title from '../Parts/Title';
import RowItem from '../Parts/RowItem';
import logo from '../../images/logo.svg';

const Document = () => {
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
				<RowItem />
			</div>
		</div>
	);
};

export default Document;
