
const FormButton = (props) => {
  const { value,buttonStyle,type } = props
  return <button className={buttonStyle} type={type}>{value}</button>
}

export default FormButton
