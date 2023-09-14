const Person = ({ name, phone, deletePerson }) => (
    <div>
      {name} - {phone} <button onClick={deletePerson}>Delete!</button>
    </div>
  )
  
export default Person