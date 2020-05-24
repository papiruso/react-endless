<h1>React Endless Scroll</h1>

Optimized scroll of elements

npm - https://www.npmjs.com/package/react-endless

```
npm i react-endless
```

<br/>
<div style="text-align: center;">
	<img src="http://uncodegem.com/react-endless.gif" alt="react-endless"/>
</div>
<br/>

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
