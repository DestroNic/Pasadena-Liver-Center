import React, { Component } from 'react';

class VisitForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            date_of_birth: "",
            sex: "",
            marital_status: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            us_state: "",
            home_phone: "",
            cell_phone: "",
            email: "",
            ec_name: "",
            ec_phone: "",
            ec_relationship: "",
            pcd_name: "",
            pcd_phone: "",
            rd_name: "",
            rd_phone: "",
            pharmacy_name: "",
            pharmacy_address: "",
            pharmacy_city: "",
            pharmacy_phone: "",
            fii_plan_name: "",
            fii_id_number: "",
            fii_group_number: "",
            fii_address: "",
            fii_ph_name: "",
            fii_ph_ssn: "",
            fii_ph_dob: "",
            fii_ph_sex: "",
            fii_ph_relationship: "",
            sii_plan_name: "",
            sii_id_number: "",
            sii_group_number: "",
            sii_address: "",
            sii_ph_name: "",
            sii_ph_ssn: "",
            sii_ph_dob: "",
            sii_ph_sex: "",
            sii_ph_relationship: ""
 
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    render(){
    return(
        <form className="form-wrapper">
            <div className="form-header">
                <p>Patient's Information</p>
            </div>
            <div className="patient-info-wrapper">
                <div className="form-item">
                    <label for="first_name">First Name</label>
                    <input 
                    type="text" 
                    name="first_name" 
                    placeholder="First Name"
                    value={this.state.first_name} 
                    onChange={this.handleChange}/>
                </div>

                <div className="form-item">
                    <label for="last_name">Last Name</label>
                    <input 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name"
                    value={this.state.last_name} 
                    onChange={this.handleChange}/>
                </div>

                <div className="form-item">
                    <label for="date_of_birth">Date of Birth</label>
                    <input 
                    type="date" 
                    name="date_of_birth" 
                    value={this.state.date_of_birth} 
                    onChange={this.handleChange}/>
                </div>

                <div className="form-item">
                    <label for="sex">Gender</label>
                    <select 
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChange}
                    >
                        <option>Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-item">
                    <label for="marital_status">Marital Status</label>
                    <select
                    name="marital_status"
                    value="this.state.marital_status"
                    onChange={this.handleChange}
                    >
                        <option>Select an option</option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-item">
                    <label for="address_line_1">Street Address</label>
                    <input 
                        type="text" 
                        name="address_line_1" 
                        placeholder="Street Address"
                        value={this.state.address_line_1} 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-item">
                    <label for="address_line_2">Apt/Unit/Room</label>
                    <input
                        type="text"
                        name="address_line_2"
                        placeholder="Apt/Unit/Room"
                        value={this.state.address_line_2}
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="form-item">
                    <label for="city">City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="form-item">
                    <label for="us_state">State</label>
                    <input
                        type="text"
                        name="us_state"
                        placeholder="State"
                        value={this.state.us_state}
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="form-item">
                    <label for="home_phone">Home Phone</label>
                    <input
                        type="text"
                        name="home_phone"
                        placeholder="Home Phone"
                        value={this.state.home_phone}
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="form-item">
                    <label for="cell_phone">Cell Phone</label>
                    <input
                        type="text"
                        name="cell_phone"
                        placeholder="Cell Phone"
                        value={this.state.cell_phone}
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="form-item">
                    <label for="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange} 
                    />
                </div>
            </div>
            <br />
            <div className="form-header">
                <p>Emergency Contact Information</p>
            </div>
            <div className="emergency-contact-wrapper">
            <div className="form-item">
                <label for="ec_name">Emergency Contact Name</label>
                <input
                    type="text"
                    name="ec_name"
                    placeholder="Emergency Contact Name"
                    value={this.state.ec_name}
                    onChange={this.handleChange} 
                />
                </div>

            <div className="form-item">
                <label for="ec_phone">Phone Number</label>
                <input
                    type="text"
                    name="ec_phone"
                    placeholder="Emergency Contact Phone"
                    value={this.state.ec_phone}
                    onChange={this.handleChange} 
                />
            </div>
            <div className="form-item">
                <label for="ec_relationship">Relationship</label>
                <input
                    type="text"
                    name="ec_relationship"
                    placeholder="Relationship"
                    value={this.state.ec_relationship}
                    onChange={this.handleChange} 
                />
            </div>

            </div>
            <div className="form-header">
                <p>Doctor's Information</p>
            </div>
            <div className="doctor-info-wrapper">
                <div className="form-item">
                <label for="pcd_name">Primary Care Doctor Name</label>
                <input
                    type="text"
                    name="pcd_name"
                    placeholder="Primary Care Doctor Name"
                    value={this.state.pcd_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="pcd_phone">Phone</label>
                <input
                    type="phone"
                    name="pcd_phone"
                    placeholder="Phone"
                    value={this.state.pcd_phone}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="rd_name">Referring Doctor Name</label>
                <input
                    type="text"
                    name="rd_name"
                    placeholder="Referring Doctor Name"
                    value={this.state.rd_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="rd_phone">Phone</label>
                <input
                    type="text"
                    name="rd_phone"
                    placeholder="Referring Doctor Phone"
                    value={this.state.rd_phone}
                    onChange={this.handleChange} 
                />
                </div>

            </div>
            <div className="form-header">
                <p>Current Local Pharmacy Information</p>
            </div>
            <div className="pharmacy-info-wrapper">
                <div className="form-item">
                <label for="pharmacy_name">Current Local Pharmacy Name</label>
                <input
                    type="text"
                    name="pharmacy_name"
                    placeholder="Current Local Family Name"
                    value={this.state.pharmacy_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="Pharmacy_address">Address</label>
                <input
                    type="text"
                    name="pharmacy_address"
                    placeholder="Address"
                    value={this.state.pharmacy_address}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="pharmacy_city">City</label>
                <input
                    type="text"
                    name="pharmacy_city"
                    placeholder="City"
                    value={this.state.pharmacy_city}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="pharmacy_phone">Phone</label>
                <input
                    type="text"
                    name="pharmacy_phone"
                    placeholder="Phone"
                    value={this.state.pharmacy_phone}
                    onChange={this.handleChange} 
                />
                </div>

            </div>
            <div className="form-header">
                <p>First Insurance Information</p>
            </div>
            <div className="first-insurance-info-wrapper">
                <div className="form-item">
                <label for="fii_plan_name">Plan Name</label>
                <input
                    type="text"
                    name="fii_plan_name"
                    placeholder="Plan Name"
                    value={this.state.fii_plan_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_id_number">ID Number</label>
                <input
                    type="text"
                    name="fii_id_number"
                    placeholder="ID Number"
                    value={this.state.fii_id_number}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_group_number">Group Number</label>
                <input
                    type="text"
                    name="fii_group_number"
                    placeholder="Group Number"
                    value={this.state.fii_group_number}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_address">Address</label>
                <input
                    type="text"
                    name="fii_address"
                    placeholder="Address"
                    value={this.state.fii_address}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_ph_name">Policy Holder Name</label>
                <input
                    type="text"
                    name="fii_ph_name"
                    placeholder="Policy Holder Name"
                    value={this.state.fii_ph_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_ph_ssn">Social Security Number</label>
                <input
                    type="text"
                    name="fii_ph_ssn"
                    placeholder="Social Security Number"
                    value={this.state.fii_ph_ssn}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_ph_dob">Date of Birth</label>
                <input
                    type="text"
                    name="fii_ph_dob"
                    placeholder="Date of Birth"
                    value={this.state.fii_ph_dob}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="fii_ph_sex">Gender</label>
                <select 
                    name="fii_ph_sex"
                    value={this.state.fii_ph_sex}
                    onChange={this.handleChange}
                >
                    <option>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                
                <div className="form-item">
                <label for="fii_ph_relationship">Relationship</label>
                <input 
                    type="text"
                    name="fii_ph_relationship"
                    placeholder="Relationship"
                    value={this.state.fii_ph_relationship}
                    onChange={this.handleChange}
                />
                </div>

            </div>
            <div className="form-header">
                <p>Second Insurance Information</p>
            </div>
            <div className="second-insurance-info-wrapper">
                <div className="form-item">
                <label for="sii_plan_name">Plan Name</label>
                <input
                    type="text"
                    name="sii_plan_name"
                    placeholder="Plan Name"
                    value={this.state.sii_plan_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_id_number">ID Number</label>
                <input
                    type="text"
                    name="sii_id_number"
                    placeholder="ID Number"
                    value={this.state.sii_id_number}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_group_number">Group Number</label>
                <input
                    type="text"
                    name="sii_group_number"
                    placeholder="Group Number"
                    value={this.state.sii_group_number}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_address">Address</label>
                <input
                    type="text"
                    name="sii_address"
                    placeholder="Address"
                    value={this.state.sii_address}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_ph_name">Policy Holder Name</label>
                <input
                    type="text"
                    name="sii_ph_name"
                    placeholder="Policy Holder Name"
                    value={this.state.sii_ph_name}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_ph_ssn">Social Security Number</label>
                <input
                    type="text"
                    name="sii_ph_ssn"
                    placeholder="Social Security Number"
                    value={this.state.sii_ph_ssn}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_ph_dob">Date of Birth</label>
                <input
                    type="text"
                    name="sii_ph_dob"
                    placeholder="Date of Birth"
                    value={this.state.sii_ph_dob}
                    onChange={this.handleChange} 
                />
                </div>

                <div className="form-item">
                <label for="sii_ph_sex">Gender</label>
                <select 
                    name="sii_ph_sex"
                    value={this.state.sii_ph_sex}
                    onChange={this.handleChange}
                >
                    <option>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className="form-item">
                <label for="sii_ph_relationship">Relationship</label>
                <input 
                    type="text"
                    name="sii_ph_relationship"
                    placeholder="Relationship"
                    value={this.state.sii_ph_relationship}
                    onChange={this.handleChange}
                />
                </div>
            </div>
            <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>

        </form>

        

    )
    }
}

export default VisitForm;