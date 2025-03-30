function About() {
    document.title = "About Us";

    return (
        <div className="w-full h-full p-5 text-zinc-300">
            <div className="bg-zinc-800 rounded-md shadow-md p-10">
                <h1 className="text-3xl font-semibold text-zinc-200 mb-5">About Us</h1>
                <p className="text-lg leading-7">
                    Welcome to <span className="text-purple-400 font-bold">Movie App</span>, your ultimate hub for discovering trending movies, TV shows, and popular content. 
                    Our platform is designed to make it easy for users to find detailed information, trailers, and cast profiles.
                </p>
                <p className="text-lg leading-7 mt-4">
                    Whether you’re a movie enthusiast or a TV series binge-watcher, <span className="text-purple-400 font-bold">Movie App</span> brings all the latest updates to your screen. 
                    Explore new content, learn about your favorite stars, and dive into the world of entertainment.
                </p>
            </div>
        </div>
    );
}

export default About;
