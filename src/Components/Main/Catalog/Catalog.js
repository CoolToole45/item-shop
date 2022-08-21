import React from "react";

import shopItems from "../../../shop-items";

export default function Catalog() {
    return (
        <div className="shop-item-list">
            {shopItems.map((data, key) => {
                return (
                    <div key={key} 
                        className="shop-item flex-center-column"
                    >
                        <h3 className="item-name">{data.name}</h3>
                        <h4 
                            className="item-type"
                            style={{color: data.typeColor}}
                        >
                            {data.type}
                        </h4>
                        <img 
                            src={data.imgUrl}
                            alt="item"
                            className="item-image"
                        />
                        <div className="item-info flex-center-column">
                            <p className="item-desc">{data.desc}</p>
                            <span className="item-price">{data.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}