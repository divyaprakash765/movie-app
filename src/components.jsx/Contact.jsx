function ContactUs() {
    document.title = "Contact Us";

    return (
        <div className="w-full h-full p-5 text-zinc-300">
            <div className="bg-zinc-800 rounded-md shadow-md p-10">
                <h1 className="text-3xl font-semibold text-zinc-200 mb-5">Contact Us</h1>
                <p className="text-lg leading-7 mb-5">
                    Have questions or feedback? Feel free to reach out to us by filling out the form below.
                </p>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-zinc-400 text-sm mb-2">Your Name</label>
                        <input
                            type="text"
                            className="p-3 bg-zinc-700 text-zinc-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-zinc-400 text-sm mb-2">Your Email</label>
                        <input
                            type="email"
                            className="p-3 bg-zinc-700 text-zinc-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-zinc-400 text-sm mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="p-3 bg-zinc-700 text-zinc-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="p-3 bg-purple-600 text-zinc-200 rounded-md hover:bg-purple-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
