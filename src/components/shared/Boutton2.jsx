import React from 'react';

function Boutton2({content, style}) {
    return (
        <div>
            <button type="button" class={`text-[#091638] bg-white border-2 border-[#091638] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${style}`}>{content}</button>
        </div>
    );
}

export default Boutton2;