import React from 'react';
import AddRowBtn from '../../AddRowBtn';
import del from '../../../images/delete-btn.svg';
import './styles.css';

const RowItem = (props) => {
	return (
		<div style={{ position: 'relative' }}>
			<div className="rowItemWrap">
				<div className="rowItemLeft">{props.data.val1}</div>
				<div className="rowItemRight">{props.data.val2}</div>
			</div>
			<div className="delete" onClick={() => props.onDeleteItem(props.data.id)}>
				<img src={del} alt="Delete" />
			</div>
			<div>
				{props.isLast && props.data.val1 !== 7 && (
					<AddRowBtn onAddItem={props.onAddItem} />
				)}
			</div>
		</div>
	);
};

export default RowItem;
