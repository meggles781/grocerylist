const Grocery = ({id, item, complete, price, groceryClick}) => {
  // const handleClick =() => {
  //   done(id);
  // }
  return (
    <>
      <h1 style={ complete ? {...styles.complete, ...styles.grocery } :styles.grocery }
        onClick={ () => groceryClick(id)}
        >
        {item} - ${price}
      </h1>
    </>
  )
};
const styles = {
  complete :{
    color: "red",
    textDecoration: 'line-through',
  }
}
export default Grocery;