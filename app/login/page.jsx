import Link from 'next/link';
export default function Login() {
 
    return (
        <div className="flex flex-col md:flex-row justify-center">
            <div className="basic-1/2 p-12">
                <img src="/logo.png" className="dark:invert w-25" alt="logo" />
                <div className="mt-12 lg:mt-32 lg:ml-12">
                    <p className="text-xl mb-4">Sign In</p>
                    <input className="w-full bg-[#E6E8EE] rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address*" />
                    <input className="w-full bg-[#E6E8EE] rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4" placeholder="Password*" />
                    <h6 className="text-end cursor-pointer mt-4">Forget your password?</h6>
                    <Link href="/signup">
                        <button type="button" className="justify-center w-full bg-black dark:invert hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-24">Sign In</button>
                    </Link>
                    <button type="button" className="flex items-center justify-center w-full bg-[#0865C2] hover:bg-[#2867B2] text-white font-bold py-2 px-4 rounded-xl mt-4">
                        <img className="dark:invert" width="24" height="24" src="https://img.icons8.com/ios-filled/24/linkedin.png" alt="linkedin" />
                        <span className="ml-2">Continue with Linkedin</span>
                    </button>
                    <button type="button" className="flex items-center justify-center w-full bg-cyan-50 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-xl mt-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/24/gmail-new.png" alt="gmail-new" />
                        <span className="ml-2">Continue with Google</span>
                    </button>
                </div>
                <p className="text-center mt-12 md:mt-24 lg:mt-32">
                    Terms and conditions Privacy policy
                </p>
            </div>
            <div className="basic-1/2 md:block p-12">
                <img src="/right.png" className="w-full dark:invert" />
            </div>
        </div>
    )
}