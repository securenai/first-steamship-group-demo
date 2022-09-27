import React from 'react';
import add from '../../images/add.svg';
import './styles.css';

const AddRowBtn = (props) => {
	return (
		<div className="AddRowBtn" onClick={() => props.onAddItem()}>
			<div>
				<img src={add} alt="add" />
			</div>
			<div className="AddRowBtnText">新增一列</div>
		</div>
	);
};

export default AddRowBtn;
