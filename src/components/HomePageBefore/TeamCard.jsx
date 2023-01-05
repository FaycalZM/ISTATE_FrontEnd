import React from 'react';

function TeamCard({Path, FullName, Role}) {
    return (
        <div>                       
            <div class="TeamCard w-[300px] h-[300px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                    <img class="CardPhoto w-[160px] mb-3 mt-9 rounded-full" src={Path} alt={`${FullName} photo`} />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{FullName}</h5>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{Role}</p>
                </div>
            </div>

        </div>
    );
}

export default TeamCard;