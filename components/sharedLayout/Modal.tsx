import React, { Dispatch, SetStateAction, useEffect } from 'react'
import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    close : Dispatch<SetStateAction<boolean>>
}

export const Modal: React.FC<ModalProps> = ({children, open, close}) => {

        if (!open) return null;
        return ReactDOM.createPortal(
            <>
                <div className='fixed inset-0 bg-black/70 z-5'></div>
                <div className='fixed inset-0 z-10 flex items-center justify-center mx-3' onClick={(event)=>{close((prev) => !prev)}}>
                    <div onClick={(event)=>{event.stopPropagation()}}>
                        {children}
                    </div> 
                </div>
            </>,
            document.getElementById('modalPortal') as HTMLDivElement
        );
}