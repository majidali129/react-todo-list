/* eslint-disable react/prop-types */


const Button = ({children, onClick, active}) => {
  return (
    <button className={`primary-btn ${active? 'active': ''}`} onClick={onClick}>{children}</button>
  )
}

export default Button