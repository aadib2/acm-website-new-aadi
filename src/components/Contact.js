import React from "react";
import { AcmAtSdsuLightBg } from "./AcmAtSdsu";

export default function Contact(){
    return (
        <section id="contact" class="pt-6 pb-12">
            <h1 class="text-4xl font-bold text-center m-4">Get Involved</h1>
            <p class="text-center text-xl m-4 p-4">The <AcmAtSdsuLightBg /> welcomes you to reach out at any time via Discord, Instagram, or Email.</p>
            <div class="flex flex-row flex-wrap space-x-4 m-2 lg:m-4 justify-center text-2xl text-center">
                <div class="p-4 min-w-1/5">
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        discord.gg/UuNuggpKYV
                    </a>
                </div>
                <div class="p-4 min-w-1/5">
                    <a href="https://www.instagram.com/sdsu_acm/" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"/>
                        @sdsu_acm
                    </a>
                </div>
                <div class="p-4 min-w-1/5">
                    <a href="mailto:aztecs.acm@gmail.com" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-8 h-8 mr-3" src="https://cdn-icons-png.flaticon.com/256/281/281769.png"/>
                        aztecs.acm@gmail.com
                    </a>
                </div>
            </div>
            <p class="text-center text-xl m-4 p-4">You can also catch us at our weekly chapter meeting every Wednesday from 4:00-5:00pm in GMCS 408.</p>
            <p class="text-center text-xl m-4 p-4 italic">If you miss a meeting, you can always catch up by watching our recorded lectures and workshops on our <a href="https://www.youtube.com/@SDSUACM/videos" target="_blank" class="underline">YouTube Channel</a>.</p>
        </section>
    );
}
