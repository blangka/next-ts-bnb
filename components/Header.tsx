import React from "react";
import Link from "next/link";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import commonStyle from "../styles/CommonStyles";

const Header: React.FC = () => {
    return (
        <commonStyle.HeaderContainer>
            <Link href="/">
                <a className="header-logo-wrapper">
                    <AirbnbLogoIcon className="header-logo" />
                    <AirbnbLogoTextIcon />
                </a>
            </Link>
            <div className="header-auth-buttons">
                <button type="button" className="header-sign-up-button">
                    회원가입
                </button>
                <button type="button" className="header-login-button">
                    로그인
                </button>
            </div>
        </commonStyle.HeaderContainer>
    );
};

export default Header;
