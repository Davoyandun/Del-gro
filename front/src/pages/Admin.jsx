import React from 'react'

import TableProducts from '../components/admin/TableProducts';
import TableCrops from '../components/admin/TableCrops';
import TablePests from '../components/admin/TablePests';
import TableBrands from '../components/admin/TableBrands';
import TablePosts from '../components/admin/TablePosts';
import TableCarrusel from '../components/admin/TableCarrusel';



export default function Admin() {
    return (
        <div>
            <TableProducts/>
            <TableCrops/>
            <TablePests/>
            <TableBrands/>
            <TablePosts/>
            <TableCarrusel/>
        </div>
    )
}
