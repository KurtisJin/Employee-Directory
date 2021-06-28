  
import React, {useState, useEffect} from "react";
import DataTable from "../Employee-Table/EmployeeTable";
import Nav from "../Navbar/Navbar";
import API from "../utils/API";

import DataAreaContext from "../utils/Context"

const DataArea = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Image", width: "15%", },
          { name: "Name", width: "15%", },
          { name: "Phone", width: "25%", },
          { name: "Email", width: "25%", },
          { name: "DOB", width: "15%", }
        ]
      });

    }

    export default DataArea;