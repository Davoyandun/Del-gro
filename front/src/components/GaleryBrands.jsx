import React, { useEffect, useState, useContext } from "react";
import AgroContext from "../context/AgroContext";
import CardBrand from "./CardBrand";

export default function GaleryBrands() {
    const Context = useContext(AgroContext);

    useEffect(() => {
        Context.getBrands();
    }, []);

    return (
        <div>
            <div>
                <h2> Nuestros Proveedores </h2>
            </div>
            <div>
                {Context.brands ? Context.brands.map((brand) => (
                    <div>
                        <CardBrand
                            image={brand.image }
                        />

                    </div>
                )
                ) : <div>Marcas No disponibles</div>
                }

            </div>

        </div>


    );
}
