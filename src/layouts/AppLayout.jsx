import Header from "../shared/Header";
import Foot from "../shared/Foot";
import Head from "next/head";

export default function AppLayout({ children, title = 'Cargando...', meta = [] }) {
    const namedMetaTags = meta.map(it => {
        return (it.name && it.content && <meta key={it.name} name={it.name} content={it.content}/>);
    })

    const propertyMetaTags = meta.map(it => {
        return (it.property && it.content && <meta key={it.property} property={it.property} content={it.content}/>);
    });
    return (
        <div className="bg-stone-100">
            <Head>
                <title>{title}</title>
                {namedMetaTags}
                {propertyMetaTags}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className="min-h-screen container mx-auto">
                {children}
            </div>
            <Foot/>
        </div>
    );
}