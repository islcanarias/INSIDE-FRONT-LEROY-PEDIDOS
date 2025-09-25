import { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function AppSidebar() {
    const [visible, setVisible] = useState<boolean>(false);
    
    // Ejemplo de datos para subdominios
    const subdominios = [
        {
            name: "Login",
            icon: "pi pi-globe",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_LOGIN_URL}` },
                { label: "Admin", icon: "pi pi-star", link: `${import.meta.env.VITE_LOGIN_ADMIN_URL}` }
            ]
        },
        {
            name: "Contabilidad",
            icon: "pi pi-wallet",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_CONTABILIDAD_URL}` },
                { label: "OCR Transkal", icon: "pi pi-file-pdf", link: `${import.meta.env.VITE_CONTABILIDAD_OCR_URL}` }
            ]
        },
        {
            name: "Transporte",
            icon: "pi pi-car",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_TRANSPORTE_URL}` },
                { label: "Disa", icon: "pi pi-map", link: `${import.meta.env.VITE_TRANSPORTE_DISA_URL}` },
                { label: "Cofarte", icon: "pi pi-map", link: `${import.meta.env.VITE_TRANSPORTE_COFARTE_URL}` }
            ]
        },
        {
            name: "RRHH",
            icon: "pi pi-users",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_RRHH_URL}` }
            ]
        },
        {
            name: "Informes",
            icon: "pi pi-chart-line",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_INFORMES_URL}` },
                { label: "Organigramas", icon: "pi pi-sitemap", link: `${import.meta.env.VITE_INFORMES_URL}` }
            ]
        },
        {
            name: "Flota",
            icon: "pi pi-truck",
            items: [
                { label: "Home", icon: "pi pi-folder", link: `${import.meta.env.VITE_FLOTA_URL}` }
            ]
        }
    ];

    // Crear una referencia dinámica para cada subdominio
    const refs = useRef(subdominios.map(() => useRef<any>(null)));

    return (
        <div className="card flex justify-content-center">
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className='text-sm'/>
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '320px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <img src={`${import.meta.env.BASE_URL}/logo.png`} alt="logo" height="40" />
                                    </span>
                                    <span>
                                        <Button type="button" ref={closeIconRef as any} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div
                                className="mt-2 mx-2 rounded"
                                style={{
                                    height: '4px',
                                    background: 'linear-gradient(90deg, rgba(99,102,241,0.7) 0%, rgba(6,182,212,0.7) 100%)',
                                    borderRadius: '3px',
                                    opacity: 0.7,
                                }}
                                />
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-2 m-0">
                                        {subdominios.map((subdominio, index) => (
                                            <li key={subdominio.name}>
                                                <StyleClass nodeRef={refs.current[index]} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <a ref={refs.current[index]} className="p-ripple flex align-items-center cursor-pointer p-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full gap-2">
                                                        <i className={subdominio.icon}></i>
                                                        <span className="font-medium">{subdominio.name}</span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    {subdominio.items.map((item, idx) => (
                                                        <li key={idx}>
                                                            <a href={item.link} className="no-underline p-ripple flex align-items-center cursor-pointer p-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full gap-2">
                                                                <i className={item.icon}></i>
                                                                <span className="font-medium">{item.label}</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    );
}
