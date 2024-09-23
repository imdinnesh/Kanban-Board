import React from 'react';
import '../Styles/DisplayMenu.css';

function DisplayMenu({ grouping, sorting, onGroupingChange, onSortingChange, isOpen, setIsOpen }) {
    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <div className="display-menu">
            <button onClick={handleClick}>Display</button>
            {isOpen && (
                <div className="menu-dropdown">
                    <div>
                        <label>Grouping</label>
                        <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div>
                        <label>Ordering</label>
                        <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DisplayMenu;