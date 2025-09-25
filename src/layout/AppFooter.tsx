import React from 'react';
import { Toolbar } from 'primereact/toolbar';

interface AppFooterProps {
    appName: string;
    appVersion: string;
}

const AppFooter: React.FC<AppFooterProps> = ({ appName, appVersion }) => {

    const startContent = (
        <p className='m-0 text-gray-600'>&copy; 2025 in side LOGISTICS</p>
    );

    const endContent = (
        <p className='m-0 text-gray-600'>{appName} v{appVersion} · Layout v0.1.0</p>
    );

    return (
        <div className="hidden sm:flex fixed left-0 bottom-0 w-full pb-0">
            <Toolbar start={startContent} end={endContent} className="w-full px-3 py-2"/>
        </div>
    );
}

export default AppFooter;