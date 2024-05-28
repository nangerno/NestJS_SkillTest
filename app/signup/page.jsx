import Link from 'next/link';

export default function SignUp () {
    return (
        <div className="flex flex-col md:flex-row justify-center">
            <div className="basic-1/2 p-12">
                <img src="/logo.png" className="dark:invert w-25" alt="logo" />
                <div className="mt-12 lg:ml-12">
                    <p className="text-xl mb-4">Sign Up to Target Leads</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center w-full bg-[#0865C2] hover:bg-[#2867B2] text-white font-bold py-3 px-2 rounded-xl text-sm">
                        <img className="dark:invert" width="24" height="24" src="https://img.icons8.com/ios-filled/24/linkedin.png" alt="linkedin" />
                        <span className="ml-1">Continue with Linkedin</span>
                        </button>
                        <button type="button" className="flex items-center justify-center w-full bg-cyan-50 hover:bg-cyan-500 text-black font-bold py-3 px-2 rounded-xl text-sm">
                        <img width="24" height="24" src="https://img.icons8.com/color/24/gmail-new.png" alt="gmail-new" />
                        <span className="ml-1">Continue with Google</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <input className="bg-slate-300 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name" />
                        <input className="bg-slate-300 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name" />
                    </div>
                    <input className="w-full bg-slate-300 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4" placeholder="Email Address" />
                    <input className="w-full bg-slate-300 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4" placeholder="Company Name" />
                    <div className="grid grid-flow-row-dense grid-cols-4 gap-4 mt-4">
                        <select className="col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" disabled>
                        <option className="text-center">+1</option>
                        </select>
                        <input className="col-span-3 bg-slate-300 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
                    </div>
                    <div className="space-y-6 py-8">
                        <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                        <span className="ml-2">I agree to receive marketing emails</span>
                        </div>
                        <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                        <span className="ml-2">*I agree to the data privacy and terms and conditions</span>
                        </div>
                        <button type="button" className="w-full bg-[#A5D15F] hover:bg-[#A5D15F] text-white font-bold py-2 px-4 rounded-xl">Sign Up</button>
                        <Link href="/login">
                        <button type="button" className="mt-6 w-full dark:invert bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">Back to login</button>
                        </Link>
                    </div>
                    <p className="text-center mt-24">Terms and conditions Privacy policy</p>
                </div>
            </div>
            <div className="basic-1/2 md:block p-12">
                <img src="/right.png" className="w-full dark:invert" />
            </div>
        </div>
    )
}