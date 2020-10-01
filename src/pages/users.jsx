import React from "react";
import  "../styles.css";

const UsersPage = () => {
return(
  <div>
   <ul>
{["dipti","sudip","avni","shubh"].map((user,idx)=>{
return <li key={idx}>{user}</li>
})}
     </ul>
    </div>
);
}

export default UsersPage;