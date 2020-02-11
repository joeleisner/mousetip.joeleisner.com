import React from 'react';
import Cookies from 'js-cookie';
import { faHeart, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import ExternalLink from './externallink';
import Icon from './icon';

import '../sass/components/footer.sass';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { system: 'light', theme: 'light' };

    removeThemeOverride() {
        // Remove the document element's theme data...
        document.documentElement.removeAttribute('data-theme');
        // ... and remove any theme override cookies
        Cookies.remove('chassis-theme');
    }

    setThemeOverride(theme) {
        // Add the theme to the document element's theme data,...
        document.documentElement.setAttribute('data-theme', theme);
        // ... set a cookie expiration date of 1 year,...
        const expires = 365;
        // ... and store the theme override cookie
        Cookies.set('chassis-theme', theme, { expires });
    }

    changeTheme(forcedTheme) {
        // Store the theme to change to (opposite of what's currently set)
        const {
                system,
                theme: currentTheme,
            }     = this.state,
            theme = forcedTheme ? forcedTheme : currentTheme === 'light' ? 'dark' : 'light';

        // Set the system and site theme state...
        this.setState({ system, theme });
        // Finally, if the new theme is the same as the system's theme, remove any potential override cookie, otherwise save one
        return system === theme ? this.removeThemeOverride() : this.setThemeOverride(theme);
    }

    componentDidMount() {
        // Attemp to grab a theme override cookie...
        const override              = Cookies.get('chassis-theme'),
            // ... and whether or not the system theme is dark...
            { matches: inDarkMode } = window.matchMedia('(prefers-color-scheme: dark)'),
            // ... and save them
            system                  = inDarkMode ? 'dark' : 'light',
            theme                   = override ? override : system;

        // Finally, set the system and site theme states and finally change the theme
        return this.setState({ system, theme }, () => this.changeTheme(theme));
    }

    render() {
        const { theme }        = this.state,
            changeThemeMessage = `Current theme: ${ theme }. Click to change theme to ${ theme === 'light' ? 'dark' : 'light' }.`;
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__content">
                            <p className="footer__copyright">
                                ©{new Date().getFullYear()} - Joel Eisner
                            </p>
                            <div className="footer__information">
                                Made with{' '}
                                <Icon
                                    icon={faHeart}
                                    style={{ width: '1rem' }}
                                    text="love"
                                />
                                {' using '}
                                <strong>Pure JS Mousetip</strong>
                                {', '}
                                <ExternalLink href="https://chassis.joeleisner.com">
                                    chassis.css
                                </ExternalLink>
                                {' and '}
                                <ExternalLink href="https://www.gatsbyjs.org">
                                    Gatsby
                                </ExternalLink>
                            </div>
                            <nav className="footer__links">
                                <button
                                    aria-label={changeThemeMessage}
                                    title={changeThemeMessage}
                                    onClick={() => this.changeTheme.bind(this)()}
                                >
                                    <Icon
                                        icon={theme === 'light' ? faMoon : faSun }
                                        style={{ width: '1rem' }}
                                        text={changeThemeMessage}
                                    />
                                </button>
                                <ExternalLink
                                    href="http://www.joeleisner.com/"
                                    title="Joel Eisner's main website"
                                >
                                    <Icon
                                        icon={faHome}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's main website"
                                    />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://www.twitter.com/joeleisner"
                                    title="Joel Eisner's twitter page"
                                >
                                    <Icon
                                        icon={faTwitter}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's twitter page"
                                    />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://www.github.com/joeleisner"
                                    title="Joel Eisner's GitHub page"
                                >
                                    <Icon
                                        icon={faGithub}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's GitHub page"
                                    />
                                </ExternalLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
