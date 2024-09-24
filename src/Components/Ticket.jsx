import React from 'react';
import '../Styles/Ticket.css';

// SVGs for priority levels
import { ReactComponent as Priority0 } from '../Assets/Nopriority.svg';
import { ReactComponent as Priority1 } from '../Assets/ImgLowPriority.svg';
import { ReactComponent as Priority2 } from '../Assets/ImgMediumPriority.svg';
import { ReactComponent as Priority3 } from '../Assets/ImgHighPriority.svg';
import { ReactComponent as Priority4 } from '../Assets/SVGUrgentPrioritygrey.svg';

// SVGs for status
import { ReactComponent as Status0 } from '../Assets/Backlog.svg';
import { ReactComponent as Status1 } from '../Assets/Cancelled.svg';
import { ReactComponent as Status2 } from '../Assets/Done.svg';
import { ReactComponent as Status3 } from '../Assets/in-progress.svg';
import { ReactComponent as Status4 } from '../Assets/Todo.svg';

//SVG for user
import { ReactComponent as User } from '../Assets/avatar.svg';

function Ticket({ ticket, grouping }) {
    const maxTitleLength = 50; // Adjust the value as needed

    const trimmedTitle = ticket.title.length > maxTitleLength
        ? ticket.title.substring(0, maxTitleLength) + '...'
        : ticket.title;

    const renderPriorityIcon = () => {
        switch (ticket.priority) {
            case 0:
                return <Priority0 className="priority-icon-label" />;
            case 1:
                return <Priority1 className="priority-icon-label" />;
            case 2:
                return <Priority2 className="priority-icon-label" />;
            case 3:
                return <Priority3 className="priority-icon-label" />;
            case 4:
                return <Priority4 className="priority-icon-label" />;
            default:
                return null;
        }
    };

    const renderStatusIcon = () => {
        switch (ticket.status) {
            case 'Backlog':
                return <Status0 className="status-icon" />;
            case 'Cancelled':
                return <Status1 className="status-icon" />;
            case 'Done':
                return <Status2 className="status-icon" />;
            case 'In progress':
                return <Status3 className="status-icon" />;
            case 'Todo':
                return <Status4 className="status-icon" />;
            default:
                return null;
        }
    };

    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                {grouping !== 'user' && <span className='ticket-user'><User className='user-icon'/></span>}
            </div>
            <div className="ticket-title">
                {renderStatusIcon()}
                {trimmedTitle}
            </div>
            <div className="ticket-footer">
                {renderPriorityIcon()}
                {ticket.tag.map((tag, index) => (
                    <span key={index} className="ticket-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Ticket;