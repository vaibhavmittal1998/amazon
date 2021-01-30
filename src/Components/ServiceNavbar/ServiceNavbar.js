import React from "react";
import './ServiceNavbar.css'
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function ServiceNavbar() {
    return (
        <div className="service__navbar">
            <div className="service__navbar__option_address">
                <RoomOutlinedIcon />
                <span className="service_navbar_option_pair">
                    <span className="service_navbar_option_address_key"> Your </span>
                    <span className="service_navbar_option_address_value"> <strong>Address</strong> </span>
                </span>
            </div>

            <div className="service__navbar__option__services">
                <span className="service_navbar_option_service_key"> <strong>Gift Cards</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Best Sellers</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Mobiles</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Today's Deal</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>New Release</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Customer Service</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Fashion</strong> </span>
                <span className="service_navbar_option_service_key"> <strong>Amazon Pay</strong> </span>
            </div>

            <div className="service__navbar__option__quote">
                <img src="https://img.icons8.com/bubbles/2x/amazon.png" className="amazon_quote_img"/>
                <span className="service_navbar_option_quote_value"> <strong>Shopping made easy | Download the app</strong> </span>
            </div>
        </div>
    );
}

export default ServiceNavbar;
