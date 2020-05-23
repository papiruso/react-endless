<h1>React Endless Scroll</h1>

Optimized scroll of elements

# EXAMPLE
```jsx
const Item = ({item}) => {
	const {name, id} = item;
	return(
		<>
			<span>{name}</span>
			<span>{id}</span>
		</>
	);
};
```

```jsx
<EndlScroll
	data={arr} //[{ id name }, { id name }]
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
```
