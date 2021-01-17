import React from "react";
import './ServiceNavbar.css'
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function ServiceNavbar() {
    return (
        <div className="service__navbar">
            <div className="service__navbar__option_address">
                <RoomOutlinedIcon />
                <span className="service_navbar_option_pair">
                    <span className="service_navbar_option_address_key"> Hello </span>
                    <span className="service_navbar_option_address_value"> Select your address </span>
                </span>
            </div>

            <div className="service__navbar__option__services">
                <span className="service_navbar_option_service_key"> Gift Cards </span>
                <span className="service_navbar_option_service_key"> Best Sellers </span>
                <span className="service_navbar_option_service_key"> Mobiles </span>
                <span className="service_navbar_option_service_key"> Today's Deal </span>
                <span className="service_navbar_option_service_key"> New Release </span>
                <span className="service_navbar_option_service_key"> Customer Service </span>
                <span className="service_navbar_option_service_key"> Fashion </span>
                <span className="service_navbar_option_service_key"> Amazon Pay </span>
            </div>

            <div className="service__navbar__option__quote">
                <img src="https://img.icons8.com/bubbles/2x/amazon.png" className="amazon_quote_img"/>
                <span className="service_navbar_option_quote_value"> Shopping made easy | Download the app </span>
            </div>
        </div>
    );
}

export default ServiceNavbar;
