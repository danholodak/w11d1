import { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [notifications, setNotifications] = useState(false);
    function handleSubmit(e){
        e.preventDefault();


    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="text" placeholder="phone number" onChange={e => setPhone(e.target.value)}/>
            <label>Phone type
                <select onChange={e => setPhoneType(e.target.value)}>
                    <option disabled selected>select from dropdown</option> 
                    <option value="mobile">mobile</option>
                    <option value="home">home</option>
                    <option value="work">work</option>
                </select>
            </label>
            <label>
                <input type="radio" value="Student" name="staff" onChange={e => setStaff(e.target.value)}/>
                Student</label>
            <label>
                <input type="radio" value="Instructor" name="staff" onChange={e => setStaff(e.target.value)}/>
                Instructor</label>
            <label>Bio
            <textarea name="bio" onChange={e => setBio(e.target.value)}></textarea>
            </label>
            <label>
                <input type="checkbox" value="notifications" onChange={e => setNotifications(e.target.checked)}/>
                I want spam!</label>
            <input type="submit"/>

        </form>
    )
}
export default Form;