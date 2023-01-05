import { TextField } from '@mui/material';
import Boutton2 from '../shared/Boutton2';

export default function SubNewsletter() {
    return (
        <div className="flex flex-row justify-center gap-28 mr-20 py-20 bg-[#F3F3FA] w-screen">
            <img src="https://i.ibb.co/tb4cYG2/Group-189.png" alt="" className="hidden md:block" />
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