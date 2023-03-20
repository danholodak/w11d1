import { useState, useEffect } from "react";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [notifications, setNotifications] = useState(false);
    const [errors, setErrors] = useState({
        // name: null, email: null, phone: null, phoneType: null, bio: null
    })
    
    
    function handleSubmit(e){
        e.preventDefault();

        const user = {
            name, email, phone, phoneType, staff, bio, notifications
        }

        const currentErrors = validate();

        if (Object.values(currentErrors).length === 0) {
            console.log(JSON.stringify(user))
        }
    }



    function validate() {
        let currentErrors = {};
        
        if (!name.length) {
            currentErrors.name =" Name can't not be not blank!";
        }

        if (!email.length || !validEmail()) {
            currentErrors.email = "Email must be valid!";
        }
        
        const re = /\d{10}/;


        if (phone && (!re.test(phone) || phone.length !== 10)) {
            currentErrors.phone = "Phone number must be 10 digits!";
        }


        if (phone && !phoneType) {
            currentErrors.phoneType = "Phone type must be selected if phone!";
        }

        if (bio.length > 280) {
            currentErrors.bio = "Too much bio, boi";
        }

        setErrors(currentErrors);
        return currentErrors;
    }

    function validEmail() {
        let splitEmail = email.split('@')
        if (splitEmail.length !== 2) {
            return false
        } else  if (splitEmail[1].split('.').length !== 2 || !splitEmail[1].split('.')[1]) {
            return false    
        } else {
            return true
        }
    }



    return(
        <>
            {/* <ul>
                {errors.map((error, i) => {
                    return <li key={i}>{error}</li>
                })}
            </ul> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
                
                <p className="error">{errors.name}</p>

                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>

                <p className="error">{errors.email}</p>

                <input type="text" placeholder="phone number" onChange={e => setPhone(e.target.value)}/>

                <p className="error">{errors.phone}</p>

                <label>Phone type
                    <select defaultValue="select" onChange={e => setPhoneType(e.target.value)}>
                        <option disabled value="select">select from dropdown</option> 
                        <option value="mobile">mobile</option>
                        <option value="home">home</option>
                        <option value="work">work</option>
                    </select>
                </label>

                <p className="error">{errors.phoneType}</p>
                

                <label>
                    <input type="radio" value="Student" name="staff" onChange={e => setStaff(e.target.value)}/>
                    Student</label>
                <label>
                    <input type="radio" value="Instructor" name="staff" onChange={e => setStaff(e.target.value)}/>
                    Instructor</label>
                <label>Bio
                <textarea name="bio" onChange={e => setBio(e.target.value)}></textarea>

                <p className="error">{errors.bio}</p>


                </label>
                <label>
                    <input type="checkbox" value="notifications" onChange={e => setNotifications(e.target.checked)}/>
                    I want spam!</label>
                <input type="submit"/>

            </form>
        </>
    )
}
export default Form;