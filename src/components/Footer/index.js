import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p>
                Andy Montalvo {new Date().getFullYear()} Airbnb clone! No rights
                reserved - this is a demo!
            </p>
            <div className="socialNetworks">
                <a
                    className="iconosSociales"
                    href={
                        "https://www.linkedin.com/in/andy-montalvo-fern%C3%A1ndez-6a9a37148/"
                    }
                >
                    <LinkedInIcon style={{ fontSize: "27px" }} />
                </a>
                <a
                    className="iconosSociales"
                    href={"https://github.com/amontalvof"}
                >
                    <GitHubIcon style={{ fontSize: "25px" }} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
