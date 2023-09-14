const Notification = ({ message}) => {
  const {isMessageError, text} = message
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  if (text){
  return (
    <div className={isMessageError ? "errorMessage" : "normalMessage"}>
      <div>{text}</div>
    </div>
  )
  }
    // const { error, errorText } = message;
  
    // if (errorText) {
    //   return <div>{errorText}</div>;
    // }
  }
  
  export default Notification