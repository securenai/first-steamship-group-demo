import React from 'react';
import AddRowBtn from '../../AddRowBtn';
import './styles.css';

const RowItem = (props) => {
	console.log(props.isLast);
	return (
		<div style={{ position: 'relative' }}>
			<div className="rowItemWrap">
				<div className="rowItemLeft">{props.val1}</div>
				<div className="rowItemRight">{props.val2}</div>
			</div>
			<div>{props.isLast && <AddRowBtn onAddItem={props.onAddItem} />}</div>
		</div>
	);
};

export default RowItem;
