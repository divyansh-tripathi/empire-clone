import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-12 bottom-0 left-0 w-full">
            <div className="font-bold text-5xl font-openSans text-center text-blue-900">Footer</div>
            <hr className="h-1 bg-blue-900 border-0 rounded-md mx-[20%]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p>© 2025 Empire Blue. All rights reserved.</p>
                </div>
                <div>
                    <Link> Privacy Policy </Link>
                    <Link> Terms of Service </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
