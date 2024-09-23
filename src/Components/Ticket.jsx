import React from 'react';
import '../Styles/Ticket.css';

function Ticket({ ticket, grouping }) {
    const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    const maxTitleLength = 50; // Adjust the value as needed

    const trimmedTitle = ticket.title.length > maxTitleLength
        ? ticket.title.substring(0, maxTitleLength) + '...'
        : ticket.title;

    return (
        <div className="ticket">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                {grouping !== 'user' && <span className="ticket-user">{ticket.userId}</span>}
            </div>
            <div className="ticket-title">{trimmedTitle}</div>
            <div className="ticket-footer">
                {grouping !== 'priority' && (
                    <span className={`ticket-priority priority-${ticket.priority}`}>
                        {priorityLabels[ticket.priority]}
                    </span>
                )}
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