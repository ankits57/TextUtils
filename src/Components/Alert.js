import React from 'react'

export default function Alert(props) {
  const firstCapital=(word)=>{
    const lword = word.toLowerCase();
    return lword.charAt(0).toUpperCase() + lword.slice(1);
  }
  return (
    props.alert && <div className='container'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{firstCapital(props.alert.type)}</strong> {props.alert.msg}
        </div>
    </div>
    
  )
}
