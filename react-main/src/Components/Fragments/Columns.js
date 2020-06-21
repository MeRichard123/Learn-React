import React from "react";

/* validateDOMNesting(...): <td> cannot appear as a child of <div>.
        <div>
            <td>Name</td>
            <td>Richard</td>
        </div>
This throws an error so use fragments

if you are mapping over an array you need to pass a key attribute 
with <React.Fragment key={item.id}> you can pass a key but with the shorthand you can't
<>
woo a fragment
</>


*/
function Columns() {
  return (
    <>
      <td>Name</td>
      <td>Richard</td>
      <td>Can't return a td in a div use a fragment</td>
    </>
  );
}

export default Columns;
