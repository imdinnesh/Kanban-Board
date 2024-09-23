import React from 'react';
import Ticket from './Ticket';
import '../Styles/TicketColumn.css';

// SVGs for priority levels
import { ReactComponent as Priority0 } from '../Assets/Nopriority.svg';
import { ReactComponent as Priority1 } from '../Assets/ImgLowPriority.svg';
import { ReactComponent as Priority2 } from '../Assets/ImgMediumPriority.svg';
import { ReactComponent as Priority3 } from '../Assets/ImgHighPriority.svg';
import { ReactComponent as Priority4 } from '../Assets/SVGUrgentPrioritycolour.svg';
import { ReactComponent as Dot } from '../Assets/dotmenu.svg';
import { ReactComponent as Plus } from '../Assets/add.svg';

function TicketColumn({ title, tickets, grouping, count, priority }) {
  const renderPriorityIcon = () => {
    switch (priority) {
      case 0:
        return <Priority0 className="priority-icon" />;
      case 1:
        return <Priority1 className="priority-icon" />;
      case 2:
        return <Priority2 className="priority-icon" />;
      case 3:
        return <Priority3 className="priority-icon" />;
      case 4:
        return <Priority4 className="priority-icon" />;
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