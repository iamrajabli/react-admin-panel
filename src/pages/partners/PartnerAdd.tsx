import { Link } from "react-router-dom";
import WithLayout from "../../components/HOC/WithLayout";
import HeadTag from "../../components/ui/HeadTag/HeadTag";

const PartnerAdd = () => {
    return (
        <div className="mt-10">

            <div className="flex justify-between items-center">
                <HeadTag tag='h2'>
                    Create new Partner
                </HeadTag>

                <Link to='/partners'>
                    <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                       Go Back
                    </button>
                </Link>
            </div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="mb-2 mt-6">
                        <label htmlFor="first_name" className="block  text-sm font-medium text-gray-900 ">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>

                    <div className="mb-2 mt-6">
                        <label htmlFor="phone" className="block  text-sm font-medium text-gray-900 ">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block  text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="multiple_files">Upload multiple files</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" id="multiple_files" type="file" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default WithLayout(PartnerAdd);