import React from 'react';
import {
	Page,
	Text,
	View,
	Image,
	Document,
	StyleSheet,
} from '@react-pdf/renderer';
import Constants from './logo';

// Create styles
const styles = StyleSheet.create({
	page: {
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column',
	},
	titleSection: {
		width: '100%',
		height: '100px',
		marginTop: '50px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text1: {
		fontSize: '14px',
	},
	text2: {
		marginTop: '15px',
		fontSize: '14px',
	},
	tableHeadWrap: {
		display: 'flex',
		width: '900px',
	},
	tableHead1: {
		width: '500px',
		height: '50px',
		fontSize: '12px',
		marginLeft: '40px',
		display: 'flex',
	},
	tableHead2: {
		position: 'absolute',
		left: '50px',
		width: '500px',
		height: '50px',
		fontSize: '12px',
		marginLeft: '40px',
		display: 'flex',
	},
	tableHeadCol1: {
		textAlign: 'center',
		padding: '0 10px',
		paddingTop: '5px',
		border: '1px solid #000',
		backgroundColor: '#f6f6f6',
		width: '50px',
		height: '25px',
	},
	tableHeadCol2: {
		textAlign: 'center',
		padding: '0 10px',
		paddingTop: '5px',
		border: '1px solid #000',
		borderLeft: 'none',
		backgroundColor: '#f6f6f6',
		width: '460px',
		height: '25px',
	},
	rowVal1: {
		textAlign: 'center',
		fontSize: '12px',
		border: '1px solid #000',
		borderTop: 'none',
		width: '50px',
		height: '20px',
		position: 'absolute',
		left: '-50px',
		paddingTop: '3px',
	},
	rowVal2: {
		padding: '0 10px',
		paddingTop: '3px',
		border: '1px solid #000',
		borderLeft: 'none',
		borderTop: 'none',
		width: '460px',
		height: '20px',
		fontSize: '12px',
	},
	rowItem: {
		left: '90px',
		top: '-25px',
	},
	imageItem: {
		width: '160px',
		height: 'auto',
		marginTop: '20px',
		marginRight: '15px',
	},
	imageLogo: {
		width: '160px',
		height: 'auto',
		position: 'absolute',
		marginTop: '20px',
		marginLeft: '25px',
	},
	imageSection: {
		marginLeft: '40px',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

// Create Document Component
const PdfDocument = (props) => (
	<Document>
		<Page size="A4" style={styles.page}>
			{/* Logo */}
			<View>
				<Image src={Constants.LOGO_URL} style={styles.imageLogo} />
			</View>
			{/* Titles Section */}
			<View style={styles.titleSection}>
				<Text style={styles.text1}>{props.data[0]}</Text>
				<Text style={styles.text2}>{props.data[1]}</Text>
			</View>
			{/* Table Header Section */}
			<View style={styles.table}>
				<View style={styles.tableHeadWrap}>
					<View style={styles.tableHead1}>
						<Text style={styles.tableHeadCol1}>Item</Text>
					</View>
					<View style={styles.tableHead2}>
						<Text style={styles.tableHeadCol2}>Work Done Description</Text>
					</View>
				</View>
				{/* Table Row Data section */}
				<View style={styles.tableRow}>
					{props.data[2] &&
						props.data[2].length > 0 &&
						props.data[2].map((item, index) => {
							return (
								<View key={index}>
									<View style={styles.rowItem}>
										<Text style={styles.rowVal1}>{item.val1}</Text>
										<Text style={styles.rowVal2}>{item.val2}</Text>
									</View>
								</View>
							);
						})}
				</View>
			</View>

			{/* Images section */}
			<View style={styles.imageSection}>
				{props.data[3] &&
					props.data[3].length > 0 &&
					props.data[3].map((item, index) => {
						return (
							<View key={index}>
								<Image src={item.data_url} style={styles.imageItem} />
							</View>
						);
					})}
			</View>
		</Page>
	</Document>
);

export default PdfDocument;
