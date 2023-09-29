import React, { useState, useEffect, useRef } from "react";

const ActionDropdown = ({ actions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    function handleKebabClick(e) {
        e.stopPropagation();
        // Notify all other kebab menus to close
        document.dispatchEvent(new Event('closeAllKebabMenus'));
        // Toggle the current menu
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        function handleDocumentClick(event) {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function handleCloseAllMenus() {
            setIsOpen(false);
        }

        // Listen for the custom event
        document.addEventListener('closeAllKebabMenus', handleCloseAllMenus);

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('closeAllKebabMenus', handleCloseAllMenus);
        };
    }, [isOpen]);


    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={handleKebabClick}
                >
                    ⋮
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {actions.map((action, index) => (
                            <a
                                key={index}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    action.handler(e);
                                }}  
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionDropdown;
