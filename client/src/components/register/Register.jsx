import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import './Register.css'
import CountryDropdown from './CountryDropdown';

const Register = () => {

  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    phone: "",
    govtIdType: "",
    govtid: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pin: ""
  })

  const navigate = useNavigate();

  const handleInputChange = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res_data = await resp.json();

      if (resp.ok) {

        setFormData({
          username: "",
          age: "",
          gender: "",
          phone: "",
          govtIdType: "",
          govtid: "",
          address: "",
          state: "",
          city: "",
          country: "",
          pin: ""
        })
        toast.success("Registration Successfully!")
        navigate("/users")
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

    } catch (error) {
      console.log("Register", error);
    }
  };

  return <section>
    <main>

      <div className="container ">


        <form onSubmit={handleSubmit} >

          <div className="personal">
            <h1 className='main-heading'>Personal Details</h1>
            <br />
            <div className='first'>

              <div>
                <label htmlFor="username">Name: </label>
                <input
                  type="text"
                  name='username'
                  id='username'
                  placeholder='Enter your username'
                  required
                  autoComplete='off'
                  value={formData.username}
                  onChange={handleInputChange}
                />

              </div>

              <div>
                <label htmlFor="age">Date of Birth or Age:</label>
                <input
                  type="text"
                  name='age'
                  id='age'
                  placeholder='DD/MM/YYYY or Age in Years'
                  required
                  autoComplete='off'
                  value={formData.age}
                  onChange={handleInputChange}
                />

              </div>

              <div>
                <label htmlFor='gender'>
                  Sex:
                  <select
                    name="gender"
                    id='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="" >Enter Sex</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="O">O</option>
                  </select>
                </label>

              </div>
            </div>


            <div className='second'>

              <div>
                <label htmlFor="phone">Mobile:</label>
                <input
                  type="text"
                  name='phone'
                  id='phone'
                  placeholder='Enter Mobile'
                  required
                  autoComplete='off'
                  value={formData.phone}
                  onChange={handleInputChange}
                />

              </div>

              <div className='govt'>

                <div>
                  <label htmlFor='govtIdType'>
                    Govt issued ID:
                    <select
                      name='govtIdType'
                      id='govtIdType'
                      value={formData.govtIdType}
                      onChange={handleInputChange}
                    >
                      <option value="">ID Type</option>
                      <option value="Aadhar" >Aadhar</option>
                      <option value="PAN">PAN</option>

                    </select>
                  </label>

                </div>

                <div>
                  <label htmlFor="govtid"></label>
                  <input
                    type="text"
                    placeholder='Enter Govt ID'
                    id='govtid'
                    name="govtid"
                    value={formData.govtid}
                    onChange={handleInputChange}
                  />

                </div>

              </div>
            </div>
          </div>

          <div className="address">
            <h1 className='main-heading'>Address Details</h1>
            <br />

            <div className='first'>

              <div>
                <label htmlFor="address">Address: </label>
                <input
                  type="text"
                  name='address'
                  id='address'
                  placeholder='Enter Address'

                  autoComplete='off'
                  value={formData.address}
                  onChange={handleInputChange}
                />

              </div>

              <div>
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  name='state'
                  id='state'
                  placeholder='Enter State'

                  autoComplete='off'
                  value={formData.state}
                  onChange={handleInputChange}
                />

              </div>

              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  name='city'
                  id='city'
                  placeholder='Enter city/town/village'

                  autoComplete='off'
                  value={formData.city}
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <div className='second'>

              <div>
                <label htmlFor="country">Country:</label>

                <CountryDropdown
                  value={formData.country}
                  onChange={(selectedCountry) => setFormData({ ...formData, country: selectedCountry })}
                />
              </div>


              <div >
                <label htmlFor="pin">Pincode:</label>
                <input
                  type="text"
                  name='pin'
                  id='pin'
                  placeholder='Enter pincode'

                  autoComplete='off'
                  value={formData.pin}
                  onChange={handleInputChange}
                />

              </div>
            </div>
          </div>


          <br />
          <button type='submit' className='btn'>Register Now</button>
        </form>



      </div>
    </main>
  </section>
}

export default Register