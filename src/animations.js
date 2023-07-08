import React from "react";
import Lottie from "lottie-react";
import url_animation from "./animations/enter_url.json";
import loading_animation from "./animations/loading.json";
import safe_animation from "./animations/safe.json";
import phishing_animation from "./animations/phishing.json";
import error_animation from "./animations/error.json";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Animation({animation}){
    var animation_;
    switch (animation) {
        case 'url_animation':
            animation_=url_animation;
            break;
        case 'loading_animation':
            animation_=loading_animation;
            break;
        case 'safe_animation':
            animation_=safe_animation;
            break;
        case 'phishing_animation':
            animation_=phishing_animation;
            break;
        case 'error_animation':
            animation_=error_animation;
            break;
        default:
            animation_=url_animation;
            break;
    }
    return(
        <Lottie animationData={animation_} loop={true} 
        
        />
    )
}


