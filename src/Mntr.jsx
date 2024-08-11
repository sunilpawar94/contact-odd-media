import React from "react";

function mntr() {
    return(
        <div className="mntr">
            <div className="Name">
                <h3>Name</h3>
                <input value="Jane Smith"/>
            </div>
            <div className="Email">
                <h3>Email</h3>
                <input value="jane@gmail.com"/>
            </div>
            <div className="Phone-Number">
                <h3>Phone Number</h3>
                <input value="+91987654321"/>
            </div>

        </div>
    )
}
export default mntr;