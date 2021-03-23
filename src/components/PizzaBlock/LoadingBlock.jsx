import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="130" cy="140" r="115" /> 
        <rect x="0" y="270" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="416" rx="6" ry="6" width="90" height="30" /> 
        <rect x="130" y="410" rx="23" ry="23" width="140" height="42" />
      </ContentLoader>
    )
}

export default LoadingBlock;
