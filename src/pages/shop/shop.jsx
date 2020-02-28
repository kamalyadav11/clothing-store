import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    };

    render() {
        return (
            <>
                {this.state.collections.map(collection => (
                    <CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                    />
                ))}
            </>
        );
    }
}

export default Shop;
