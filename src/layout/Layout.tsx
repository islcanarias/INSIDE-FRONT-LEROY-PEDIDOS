import React from 'react';
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';

type LayoutProps = {
    children: React.ReactNode;
    appName: string;
    appVersion: string;
};

const Layout: React.FC<LayoutProps> = ({ children, appName, appVersion }) => {
    return (
        <div className="layout-wrapper">
            <AppTopbar />
            <div
                className="w-full backdrop-blur-sm"
                style={{
                    height: '4px',
                    background: 'linear-gradient(90deg, rgba(99,102,241,0.7) 0%, rgba(6,182,212,0.7) 100%)',
                    borderRadius: '3px',
                    opacity: 0.7,
                }}
            />
            <div className="layout-content">
                <main className="layout-main">
                    {children}
                </main>
            </div>
            <AppFooter appName={appName} appVersion={appVersion}/>
        </div>
    );
};

export default Layout;
