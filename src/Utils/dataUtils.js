export const fetchData = async () => {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    const data = await response.json();
    return data;
};

export const groupTickets = (tickets, grouping, users) => {
    switch (grouping) {
        case 'status':
            return groupByStatus(tickets);
        case 'user':
            return groupByUser(tickets, users);
        case 'priority':
            return groupByPriority(tickets);
        default:
            return groupByStatus(tickets);
    }
};

const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
    }, {});
};

const groupByUser = (tickets, users) => {
    const userMap = users.reduce((acc, user) => {
        acc[user.id] = user.name;
        return acc;
    }, {});

    return tickets.reduce((acc, ticket) => {
        const userName = userMap[ticket.userId] || 'Unassigned';
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
    }, {});
};

const groupByPriority = (tickets) => {
    const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return tickets.reduce((acc, ticket) => {
        const priorityLabel = priorityLabels[ticket.priority];
        acc[priorityLabel] = acc[priorityLabel] || [];
        acc[priorityLabel].push(ticket);
        return acc;
    }, {});
};

export const sortTickets = (groupedTickets, sorting) => {
    const sortedGroupedTickets = {};
    Object.keys(groupedTickets).forEach((key) => {
        sortedGroupedTickets[key] = [...groupedTickets[key]].sort((a, b) => {
            if (sorting === 'priority') {
                return b.priority - a.priority;
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    });
    return sortedGroupedTickets;
};

export const getPriorityColumns = (sortedGroupedTickets) => {
    const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    const priorityColumns = {};
    priorityLabels.forEach((label) => {
        priorityColumns[label] = sortedGroupedTickets[label] || [];
    });
    return priorityColumns;
};