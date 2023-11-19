import React, { useEffect, useCallback } from 'react';
import ProgressBar from './ProgressBar';

function Popup({ isOpen, closeModal, response }) {
    const memoizedCloseModal = useCallback(closeModal, [closeModal]);

    useEffect(() => {
        let timeoutId;
        if (response) {
            timeoutId = setTimeout(() => {
                memoizedCloseModal();
                console.log(response);
            }, 3400);
        }
        return () => clearTimeout(timeoutId);
    }, [response, memoizedCloseModal]);

    console.log(response);

    return (
        <div
            className="modal-container w-full h-screen fixed top-0 left-0 z-[1000]"
            onClick={memoizedCloseModal}
        >
            <div className="modal-body fixed top-4 left-1/2 transform -translate-x-1/2 w-64 min-h-[16px] bg-white text-black rounded-2xl flex flex-col justify-center items-center text-5xl p-5 border-2 border-bg">
                {isOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            {response ? (
                                <div>
                                    <h1 style={{ fontSize: 20 }}>{response}</h1>
                                    <ProgressBar />
                                </div>
                            ) : (
                                <div>
                                    <div className="modal-skeleton relative overflow-hidden w-5em min-h-3em bg-gradient-to-b from-gray-200 via-transparent to-gray-200 bg-repeat-y bg-size-150px-280px bg-position-0-5px bg-position-0-40px bg-position-0-75px bg-position-90px-75px bg-position-0-110px">
                                        <div className="skeleton-indicator absolute w-full h-full animate-skeleton bg-gray-300">
                                            <div className="shadow absolute w-0 bg-white" />{' '}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Popup;
