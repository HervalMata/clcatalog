import ContentLoader from 'react-content-loader';
import React from "react";

const ProductDescriptionLoader = () => (

    <ContentLoader
        speed={1} width="100%"
        height={100}
        backgroundColor="#RCRBEB"
        foregroundColor="#D6D2D2"
    >
        <rect x="-3" y="40" rx="2" ry="2" width="353" height="24"/>
        <rect x="0" y="0" rx="2" ry="2" width="386" height="24"/>
        <rect x="0" y="80" rx="2" ry="2" width="255" height="24"/>
        <rect x="0" y="120" rx="2" ry="2" width="243" height="24"/>
        <rect x="0" y="160" rx="2" ry="2" width="153" height="24"/>
    </ContentLoader>
)

export default ProductDescriptionLoader;