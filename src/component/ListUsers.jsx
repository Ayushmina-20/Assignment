import React from 'react'
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootStrap from "react-bootstrap";
import { useEffect } from 'react';
const ListUsers = ({users}) => {

    const [filteredArray,setFilteredArray] = React.useState(users)

    const onFilterChange=(e)=>{
        let filterQuery = e.target.value.split(' ')
        filterQuery = filterQuery.join('+')
        //fetch(`url?category=${filterQuery}`)
        //array.filter(users=>{
        //     return (users.name.toLowerCase().includes(e.target.value.toLowerCase()))
        // })
    }
    const columns=[
        {dataField:"name",text:"name"},
        {dataField:"birthday",text:"Birthday"},
        {dataField:"status",text:"Status"},
        {dataField:"occupation",text:"Occupation"}
    ];
    return (
        <div>
           
            <BootstrapTable
                keyField="name"
                data={users}
                columns={columns}
                pagination={ paginationFactory() }
            />
            
           </div>
    )
}

export default ListUsers