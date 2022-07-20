const ContactForm = () => {
    return (
        <div className="w-full bg-slate-50">
            <div className="py-12 lg:py-20">
                <h2 className="text-center uppercase text-3xl md:text-5xl font-bold text-slate-700 mb-8">Contact Us</h2>

                <form
                  name="contact-wade"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="company"
                  className="flex flex-col px-8 max-w-2xl mx-auto"
                >
                    <label htmlFor="company" className="hidden">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="hidden"
                    />

                    <label htmlFor="name" className="uppercase font-medium text-slate-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        minLength="2"
                        className="border border-slate-400 mb-4 rounded-none outline-none p-2 bg-slate-50 focus:border-slate-700"
                    />

                    <label htmlFor="email" className="uppercase font-medium text-slate-700">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        minLength="3"
                        className="border border-slate-400 mb-4 rounded-none outline-none p-2 bg-slate-50 focus:border-slate-700"
                    />

                    <label htmlFor="message" className="uppercase font-medium text-slate-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        minLength="10"
                        className="resize-y border border-slate-400 mb-8 rounded-none outline-none p-2 bg-slate-50 focus:border-slate-700"
                    />

                    <input type="submit" value="Submit" className="transition ease-in-out duration-250 uppercase font-medium text-slate-700 border border-slate-400 py-2
                    hover:cursor-pointer hover:bg-slate-700 hover:border-slate-700 hover:text-slate-50 hover:shadow-lg
                    active:transition-none active:shadow-none active:bg-slate-400 active:border-slate-400 active:text-slate-50 rounded-none"/>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;