// now do above code dynamically
function ListGroupDynamic() {
  const items = ["Mango", "Apple", "Pineapple", "Grapes"];

  if (items.length === 0) return <p> Items not found</p>;
  else
    return (
      <>
        <h1>List group but created dynamically</h1>
        <ul className="list-group">
          {items.map((items) => (
            <li className="list-group-item" key={items}>
              {items}
            </li>
          ))}
        </ul>
      </>
    );
}

export function M1() {
  return <h1>hello</h1>;
}
export default ListGroupDynamic;
