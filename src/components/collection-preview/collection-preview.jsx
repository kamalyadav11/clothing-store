import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ items, title }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, i) => i < 4)
                    .map(item => (
                        <CollectionItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
