import React from 'react';
import '../Styles/DisplayMenu.css';

//SVG for Display icon and arrow down icon
import { ReactComponent as DisplayIcon } from '../Assets/Display.svg';
import { ReactComponent as ArrowDownIcon } from '../Assets/down.svg';

function DisplayMenu({ grouping, sorting, onGroupingChange, onSortingChange, isOpen, setIsOpen }) {
    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <div className="display-menu">
            <button onClick={handleClick}>
                <DisplayIcon className="display-icon" />
                <span className="button-text">Display</span>
                <ArrowDownIcon className="arrow-icon" />
            </button>
            {isOpen && (
                <div className="menu-dropdown">
                    <div className="dropdown-option">
                        <label>Grouping</label>
                        <div className="select-wrapper">
                            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                            <ArrowDownIcon className="arrow-icon" />
                        </div>
                    </div>
                    <div className="dropdown-option">
                        <label>Ordering</label>
                        <div className="select-wrapper">
                            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                            <ArrowDownIcon className="arrow-icon" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DisplayMenu;