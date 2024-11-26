"use client";

import {postSubscribers} from '@/lib/supabase.js'
import { FaEnvelope } from "react-icons/fa6";

export default function Form() {
    
    async function handleSubmit(event)
    {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.target); // Get form data

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
        }

        await postSubscribers(data)
    }

    return (
        <form
            method="POST"
            className="flex flex-col justify-between shadow-md h-fit w-[350px] rounded-md border-2 border-blue-400 text-blue-400 p-4"
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl uppercase font-semibold tracking-wide text-center mb-4">
                Subscribe to newsletter
            </h2>
            <div className="flex-grow">
                <div className="mb-8">
                    <label htmlFor="name_input" className="block font-semibold">Name</label>
                    <input
                        className="border-2 border-gray-200 py-2 px-3 rounded-md transition-border ease-in duration-150 focus:border-blue-600 outline-none w-full"
                        type="text"
                        name="name"
                        id="name_input"
                        placeholder="Enter name"
                        required
                    />
                </div>
                <div className="mb-12">
                    <label htmlFor="email_input" className="block font-semibold">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className="border-2 border-gray-200 py-2 px-3 rounded-md transition-border ease-in duration-150 focus:border-blue-600 outline-none w-full"
                        id="email_input"
                        placeholder="Enter email"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                className="flex items-center justify-center gap-4 mt-auto bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
            >
                Subscribe <FaEnvelope />
            </button>
        </form>
    );
}
