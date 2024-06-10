'use client';
import axiosInstance from '../../../api/axiosInstance';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/OnFetch/Loading';

const fetchProducts = async () => {
    const { data } = await axiosInstance.get('/products');
    return data;
}

const Page = () => {
    const { data, isLoading, isError } = useQuery('products', fetchProducts);

    if (isLoading) {
        return <Loading />;
    }

    if (isError || !data) {
        return <h3>Нету данных</h3>;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fields = Object.fromEntries(formData.entries());
        console.log(fields);

        // Для отображения файла в консоле
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        event.target.reset();
    }

    return (
        <form className="grid gap-6 max-w-xl mx-auto p-4 md:p-6" onSubmit={onSubmit}>
            <div className="grid gap-1.5">
                <label
                    htmlFor="title"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Product Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter product title"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div className="grid gap-1.5">
                <label
                    htmlFor="category"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Category
                </label>
                <div className="relative">
                    <select
                        id="category"
                        name="category"
                        defaultValue="select"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-8 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="select" disabled>
                            Select category
                        </option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home">Home & Garden</option>
                        <option value="sports">Sports & Outdoors</option>
                        <option value="beauty">Beauty & Personal Care</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid gap-1.5">
                <label
                    htmlFor="image"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Product Image
                </label>
                <input
                    id="image"
                    name="image"
                    type="file"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div className="grid gap-1.5">
                <label
                    htmlFor="price"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Price
                </label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter product price"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#002F34] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
                Upload Product
            </button>
        </form>
    );
}

export default Page;
