import React from 'react';
import './styles.css';
import publish from '../../images/publish.svg';
import arrow from '../../images/arrow-left.svg';
import del from '../../images/delete.svg';
import print from '../../images/print.svg';
import member from '../../images/member.svg';
import save from '../../images/save.svg';

const Header = () => {
	return (
		<div className="header-container">
			<div className="header-main">
				<div className="back-btn">
					<div>
						<img src={arrow} alt="arrow" />
					</div>
					<div style={{ color: 'white' }}>返回表單列表</div>
				</div>
				<div className="icon-navs">
					<img src={del} alt="del" />
					<img src={print} alt="print" />
					<img src={member} alt="member" />
					<img src={save} alt="save" />
				</div>
			</div>
			<div className="publish-btn">
				<div>
					<img src={publish} alt="publish" width={18} height={18} />
				</div>
				<div style={{ color: 'white' }}>送簽</div>
			</div>
		</div>
	);
};

export default Header;
