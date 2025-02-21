import React from 'react'

const DriverModule = () => {
  return (
   <>
   <div>
    <img src="profile.png" alt="Profile" className="profile-image"/>
        <div className="add-icon">+</div>


        <label className="L-driverid">Driver ID</label>
        <input type="text" id="driverid" className="DriverID" placeholder="Unique ID"/>


        <label className="L-drivername">Driver Name</label>
        <input type="text" id="driverName" className="DriverName" placeholder="xxxxxxxxxxxxxx"/>


        <label className="L-dob">DOB</label>
        <input type="date" id="dob" className="DOB" placeholder=""/>


        <label className="L-BG">BloodGroup</label>
        <select className="BGSelect" id="bloodgroup">
            <option value="O+ve">O+ve</option>
            <option value="O-ve">O-ve</option>
            <option value="B+ve">B+ve</option>
            <option value="B-ve">B-ve</option>
            <option value="AB+ve">AB+ve</option>
            <option value="AB-ve">AB-ve</option>
        </select>

        <label className="L-PH">Ph Number</label>

        <select className="country-code1" id="countryCode">
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+81">+81</option>
            <option value="+49">+49</option>
            <option value="+33">+33</option>
            <option value="+971">+971</option>
        </select>
        <input type="number" id="ph" className="PH" placeholder="Enter phone number"  />


        <label className="L-gender">Gender</label>
        <select className="genderSelect" id="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
        </select>


        <label class="L-vehic">Vehicle Type</label>
        <select class="VehicleType" id="vehicle">
            <option value="lorry">Lorry</option>
            <option value="bus">Bus</option>
            <option value="truck">Truck</option>
        </select>

        <label class="L-WType">Work Type</label>
        <select class="WorkType" id="Work">
            <option value=""></option>
        </select>


        <label class="L-Jdate">Joining Date</label>
        <input type="date" id="joindate" class="Join">

        <label class="L-headAddr">Address</label>
        <hr style="border: 2px dashed black;">


        <label class="L-state">State</label>
        <input type="text" id="state" class="STATE" placeholder="">


        <label class="L-District">District</label>
        <input type="text" id="dist" class="Dist" placeholder="">



        <label class="L-Addres">Address</label>
        <input type="text" class="addr" id="address">

        <button class="cancel1">Cancel</button>
        <button class="next">Next</button>

   </div>
   </>
  )
}

export default DriverModule