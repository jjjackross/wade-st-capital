import LinkedIn from '../src/svg/icon-linkedin.js';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-400 p-8 h-40">
            <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 flex justify-between">
                <div className="flex flex-col justify-end">
                    <h3 className="text-slate-700 text-xl font-medium">Links</h3>
                    <p>If you are reading this give me feedback on the site. This is just a temporary footer I will finish this towards the end of site development.</p>
                </div>
                <div className="flex justify-end"><LinkedIn /></div>
            </div>
        </footer>
    )
}

export default Footer;