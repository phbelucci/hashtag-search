import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from './style'
import {
    Button,
    Header,
    HeaderName,
    HeaderGlobalBar,
    SkipToContent,
} from 'carbon-components-react';

const NavBarCarbon = () => {

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const logoutWithRedirect = () =>
    logout({
        returnTo: window.location.origin,
    });

    return (
        <Container>
            <Header aria-label="# Hashtag Searcher #">
                <SkipToContent />
                <HeaderName href="#" prefix="">
                    # Hashtag Searcher #
                </HeaderName>
                <HeaderGlobalBar>
                    { !isAuthenticated && (
                        <Button
                        id="qsLoginBtn"
                        color="primary"
                        className="btn-margin"
                        onClick={() => loginWithRedirect()}
                        >
                            Log in
                        </Button>
                    )}

                    { isAuthenticated && (
                        <>
                            <HeaderName href="#" prefix="">
                                {user.name}
                            </HeaderName>
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="nav-user-profile d-inline-block rounded-circle mr-3"
                                width="50"
                            />
                            <FontAwesomeIcon icon="power-off" className="mr-3" />
                            <Button
                                to="#"
                                id="qsLogoutBtn"
                                onClick={() => logoutWithRedirect()}
                            >
                                Log out
                            </Button>
                        </>
                    )}                
                </HeaderGlobalBar>
            </Header>
        </Container>
    );

}

export default NavBarCarbon;