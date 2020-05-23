<h1>React Endless Scroll</h1>

Optimized scroll of elements

npm - https://www.npmjs.com/package/react-endless

```
npm i react-endless
```

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
	itemStyles={{...}}
	ItemBlock={Item}
	itemHeight="50"
	itemsCount={15}
	styles={{...}}
/>
```

by goga
