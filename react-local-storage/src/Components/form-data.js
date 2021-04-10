
const FormData = ({ name, surname, handleSubmitForm, handleName, handleSurname }) => {


    return (
        <div className="container">
            <form onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={handleName} />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" className="form-control" value={surname} onChange={handleSurname} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Login</button>
            </form>
        </div>
    );

}

export default FormData;