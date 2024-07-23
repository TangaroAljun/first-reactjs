function Colors(){

  const Colors = [
   {id: 1, name: "Red", fav:2}, { id: 2, name: "Blue", fav:1}, {id: 3, name: "Violet", fav:4}, {id:  4, name: "Yellow", fav:3}, {id:5, name: "Green", fav: 5}
  ];
  // Colors.sort((a, b) => a.name.localeCompare(b.name));
  // const mostFav = Colors.filter(Colors => Colors.fav >3)
  const listItems = Colors.map ( Color => <li key={Color.name}>
    {Color.name}
    &nbsp; {Color.fav}</li> );
  return(
    <ol>{listItems}</ol>
  )
}

export default Colors