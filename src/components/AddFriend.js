import React from "react";

const AddFriend = () => {
    return (
        <div>

            <h2>Add Friend</h2>
            <form>
                <div>
                <label htmlFor="name-container">Friend Name </label>
                <input id="name"/>
                </div>

                <div>
                <label htmlFor="email-container">Friend Email </label>
                <input type="email" id="email"/>
                </div>

                <button>SUBMIT</button>

            </form>

        </div>
    )
  
  }

export default AddFriend;