import { Toolbar } from 'primereact/toolbar';
import AppSidebar from './AppSidebar';

export default function AppTopbar() {

    const start = (
        <div className="flex items-center gap-3 ml-0">
            <AppSidebar />
            <img src={`${import.meta.env.BASE_URL}/logo.png`} alt="logo" height="39" />
        </div>
    );
/*
    const end = (
        <div className="flex items-center gap-2 mr-0">
            <img src={`${import.meta.env.BASE_URL}/inside-favicon.png`} alt="logo" height="39" />
        </div>
    );
*/
    return (
        <>
            <div>
                <Toolbar start={start} /*end={end}*/ className='py-2'/>
            </div>
        </>
    );

}
