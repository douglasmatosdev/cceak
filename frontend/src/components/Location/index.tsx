import { informations } from '@/utils'
import React from 'react'

export const Location = () => {
    return (
        <div className='flex p-4 mt-8 mb-8'>
            
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353.000509880103!2d-43.25112448520865!3d-22.6429312392784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9973579c4176a9%3A0xdc211daa60fc2910!2sCasa%20de%20Cultura%20Esp%C3%ADrita%20Allan%20Kardec!5e0!3m2!1sen!2sbr!4v1686405496701!5m2!1sen!2sbr"
                width="600"
                height="450"
                loading="lazy"
            >
            </iframe>
        </div>
    )
}