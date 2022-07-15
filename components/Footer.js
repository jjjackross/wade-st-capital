import LinkedIn from '../src/svg/icon-linkedin.js';

const Footer = () => {
    return (
        <footer className="border-t border-slate-400 p-4 h-40">
            <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 flex justify-between">
                <div className="flex flex-col justify-end">
                    <h3 className="text-slate-700 text-xl font-medium">Links</h3>
                    <p href="/">Home</p>
                    <p href="/">Home</p>
                    <p href="/">Home</p>

                </div>
                <div className="flex justify-end"><LinkedIn /></div>
            </div>
        </footer>
    )
}

export default Footer;