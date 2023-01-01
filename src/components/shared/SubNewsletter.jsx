import { Button, TextField } from '@mui/material';
import React from 'react';
import Boutton2 from './Boutton2';

function SubNewsletter(props) {
    return (
        <div className="flex flex-row justify-center gap-28 mr-20 py-20 bg-[#F3F3FA] w-screen">
            <img src="/images/Footer/Send.svg" alt="" className="hidden md:block" />
            <div className="flex flex-col">
                <h1 className="font-semibold text-[24px] lg:text-[36px] text-[#091638]">Subscribe to newsletter</h1>
                <p className="text-[14px] lg:text-[18px] py-4">Get the latest news and interesting offers and real estate</p>
                <div className="flex flex-row gap-4">
                    <TextField size='small' id="outlined-basic" label="E-mail" variant="outlined" />
                    <Boutton2 content={"Subscribe"} style="bg-[#F3F3FA]" />
                </div>
            </div>
        </div>
    );
}

export default SubNewsletter;