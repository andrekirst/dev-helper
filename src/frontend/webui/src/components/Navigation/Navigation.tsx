import React from 'react';
import { Nav, initializeIcons, INavStyles, INavLinkGroup } from '@fluentui/react';

const navigationStyles : INavStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop: '10vh'
    },
    linkText: 'LinkText',
    link: 'Link',
    compositeLink: 'compositeLink',
    chevronButton: 'chevronButton',
    chevronIcon: 'chevronIcon',
    navItems: '',
    navItem: '',
    group: '',
    groupContent: ''
};

const links : INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Dashboard',
                key: 'key_dashboard',
                url: '/',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Settings',
                key: 'key_settings',
                url: '/',
                iconProps: {
                  iconName: 'PlayerSettings',
                  styles: {
                    root: {
                      fontSize: 20,
                      color: '#106ebe',
                    },
                  }
                }
              }
        ]
    }
];

const Navigation = () => {
    initializeIcons();
    return (
        <Nav
            groups={links}
            selectedKey='key_dashboard'
            styles={navigationStyles}
        />
    )
}

export default Navigation;