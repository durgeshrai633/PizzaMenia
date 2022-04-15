import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../../Store/authSlice";
import "./account.css";
function Account() {
  const [edit, setEdit] = useState(false);
  const [details, setDetails] = useState({});
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <section>
      <h2 className='heading'>Account Details</h2>
      <div className='account-card'>
        <div className='account-field'>
          <span>Name:</span>
          {!edit ? (
            <span>{currentUser.name ? currentUser.name : ""}</span>
          ) : (
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={currentUser.name}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        <div className='account-field'>
          <span>Phone:</span>
          {!edit ? (
            <span>{currentUser.mobile ? currentUser.mobile : ""}</span>
          ) : (
            <input
              type='number'
              name='mobile'
              id='mobile'
              defaultValue={currentUser.mobile}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        <div className='account-field'>
          <span>Address:</span>
          {!edit ? (
            <span>{currentUser.address ? currentUser.address : ""}</span>
          ) : (
            <input
              type='text'
              name='address'
              id='address'
              defaultValue={currentUser.address}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        <div>
          {!edit && (
            <button className='btn' onClick={() => setEdit(true)}>
              Edit
            </button>
          )}
          {edit && (
            <button
              className='btn'
              onClick={() => {
                dispatch(addDetails(details));
                setEdit(false);
              }}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Account;
