import React from 'react';
import AddRowBtn from '../../AddRowBtn';
import './styles.css';

const RowHeader = (props) => {
	return (
		<div style={{ position: 'relative' }}>
			<div className="rowHeaderWrap">
				<div className="rowHeaderLeft">Item</div>
				<div className="rowHeaderRight">Work Done Description</div>
			</div>
			<div>{props.len === 0 && <AddRowBtn onAddItem={props.onAddItem} />}</div>
		</div>
	);
};

export default RowHeader;
