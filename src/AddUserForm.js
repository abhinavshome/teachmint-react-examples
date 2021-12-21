const AddUserForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const data = Object.fromEntries(formdata.entries());
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    Name:
                    <input name="name" type="text" />
                </div>
                <div>
                    Age:
                    <input name="age" type="number" />
                </div>
                <div>
                    City:
                    <select name="city">
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                    </select>
                </div>
                <input type="submit" value="Add" />
            </form>
            
        </div>
    );
};

export default AddUserForm;