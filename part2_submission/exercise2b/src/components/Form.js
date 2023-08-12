const Form = ({newName, newPhone,addPerson,setNewName,setNewPhone}) => (
    <form onSubmit={addPerson}>
    <h2>add a new</h2>
        <div>
        name: <input value={newName} onChange={(obj) => setNewName(obj.target.value)}/>
        </div>
        <div>
            number: <input value={newPhone} onChange={(obj) => setNewPhone(obj.target.value)}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default Form
