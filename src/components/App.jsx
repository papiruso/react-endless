import React from 'react';
import styled from 'styled-components';
import EndlScroll from 'react-endless';

const Item = ({item}) => {
	const {name, id} = item;
	return(
		<>
			<span>{name}</span>
			<span>{id}</span>
		</>
	);
};

const arr = [];

for (let i = 0; i <= 30000; i++) {
	arr.push({id: i, name: 'Name'})
}

const App = () => {
	return (
		<Content>
			<EndlScroll
				data={arr}
				itemStyles={{
					borderBottom: '1px solid #ddd',
				}}
				ItemBlock={Item}
				itemHeight="50"
				itemsCount={15}
				styles={{
					width: '300px',
					background: 'white',
					height: '500px',
					borderRadius: '10px',
					boxShadow: '0 0 21px 0px rgba(221, 221, 221, 0.41)',
				}}
				/>
		</Content>
	);
};

const Content = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ItemBlock = styled.div`
	border-bottom: 1px solid #ddd;
`;

export default App;