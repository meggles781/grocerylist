

const Grocery = ({id, item, complete, price}) => {

  // const handleClick =() => {
  //   done(id);
  // }

  return (
    <>
      <h1 style={ complete ? {...styles.complete} : {} }>
        {item}  ${price} <button>Done?</button>
      </h1>
    </>
  )
}


const styles = { 
  complete :{
    color: "red",
    textDecoration: 'line-through',    
  }

  



}

export default Grocery;