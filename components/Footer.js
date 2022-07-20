import LinkedIn from '../src/svg/icon-linkedin.js';
import Link from 'next/link'

const Footer = (props) => {
    const navURLs = props.navURLs

    return (
        <footer className="bg-slate-400 border-t border-slate-400 p-8">
            <p className="text-center mb-4 font-medium bg-slate-50 max-w-3xl mx-auto rounded-md p-2">If you are reading this then give me feedback on the site.</p>
            <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 flex justify-between">
                <div className="flex flex-col justify-end">
                    <h3 className="text-slate-700 text-xl font-medium mb-2">Links</h3>
                    { navURLs.map(([title, url]) => (
                        <Link key={ url } href={ url }>
                            <a className="text-slate-700 hover:font-medium mb-1 mr-auto">{ title }</a>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-end"><LinkedIn /></div>
            </div>
        </footer>
    )
}

export default Footer;