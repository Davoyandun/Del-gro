import React from 'react'
import FormCarrusel from '../components/FormCarrusel';
import FormProducts from '../components/FormProducts';
import FormPosts from '../components/FormPosts';
import FormPests from '../components/FormPests';
import FormBrands from '../components/FormBrands';
import FormCrops from '../components/FormCrops';
import TableProducts from '../components/TableProducts';
import TableCrops from '../components/TableCrops';
import TablePests from '../components/TablePests';
import TableBrands from '../components/TableBrands';
import TablePosts from '../components/TablePosts';
import TableCarrusel from '../components/TableCarrusel';


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
