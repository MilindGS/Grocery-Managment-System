const Button = (props) => {
  const { title, onClick } = props
  return (
    <button onClick={onClick} style={styles.button}>
      {title}
    </button>
  )
}

const styles = {
  button: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#11851b',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
  },
}

export default Button
