import React from 'react';
import Ticket from './Ticket';
import '../Styles/TicketColumn.css';

// SVGs for priority levels
import { ReactComponent as Priority0 } from '../Assets/Nopriority.svg';
import { ReactComponent as Priority1 } from '../Assets/ImgLowPriority.svg';
import { ReactComponent as Priority2 } from '../Assets/ImgMediumPriority.svg';
import { ReactComponent as Priority3 } from '../Assets/ImgHighPriority.svg';
import { ReactComponent as Priority4 } from '../Assets/SVGUrgentPrioritycolour.svg';

// SVGs for status
import { ReactComponent as Status0 } from '../Assets/Backlog.svg';
import { ReactComponent as Status1 } from '../Assets/Cancelled.svg';
import { ReactComponent as Status2 } from '../Assets/Done.svg';
import { ReactComponent as Status3 } from '../Assets/in-progress.svg';
import { ReactComponent as Status4 } from '../Assets/Todo.svg';

// SVGs for icons
import { ReactComponent as Dot } from '../Assets/dotmenu.svg';
import { ReactComponent as Plus } from '../Assets/add.svg';

function TicketColumn({ title, tickets, grouping, count }) {
  const renderPriorityIcon = () => {
    console.log(title);
    switch (title) {
      case 'No priority':
        return <Priority0 className="priority-icon" />;
      case 'Low':
        return <Priority1 className="priority-icon" />;
      case 'Medium':
        return <Priority2 className="priority-icon" />;
      case 'High':
        return <Priority3 className="priority-icon" />;
      case 'Urgent':
        return <Priority4 className="priority-icon" />;
      case 'Backlog':
        return <Status0 className="priority-icon" />;
      case 'Cancelled':
        return <Status1 className="priority-icon" />;
      case 'Done':
        return <Status2 className="priority-icon" />;
      case 'In progress':
        return <Status3 className="priority-icon" />;
      case 'Todo':
        return <Status4 className="priority-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="ticket-column">
      <div className="header">
        {renderPriorityIcon()}
        <h2>{title}</h2>
        <span className="ticket-count">{count}</span>
        <span className="icons">
          <Plus className="icon" />
          <Dot className="icon" />
        </span>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} grouping={grouping} />
      ))}
    </div>
  );
}

export default TicketColumn;