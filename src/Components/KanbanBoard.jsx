import React, { useState, useEffect, useCallback } from 'react';
import DisplayMenu from './DisplayMenu';
import TicketColumn from './TicketColumn';
import { fetchData, groupTickets, sortTickets, getPriorityColumns } from '../Utils/dataUtils';
import '../Styles/KanbanBoard.css';

function KanbanBoard() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [grouping, setGrouping] = useState('status');
    const [sorting, setSorting] = useState('priority');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchData();
            setTickets(data.tickets);
            setUsers(data.users);
        };
        loadData();
    }, []);

    useEffect(() => {
        const savedState = localStorage.getItem('kanbanState');
        if (savedState) {
            const { grouping: savedGrouping, sorting: savedSorting } = JSON.parse(savedState);
            setGrouping(savedGrouping);
            setSorting(savedSorting);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('kanbanState', JSON.stringify({ grouping, sorting }));
    }, [grouping, sorting]);

    const handleOutsideClick = useCallback((e) => {
        if (!e.target.closest('.display-menu')) {
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    const groupedTickets = groupTickets(tickets, grouping, users);
    const sortedGroupedTickets = sortTickets(groupedTickets, sorting);

    const allStatusLabels = ['Todo', 'In progress', 'Done','Backlog','Cancelled']; // Add all possible status labels here

    const columnsToRender = grouping === 'priority' ? getPriorityColumns(sortedGroupedTickets) : sortedGroupedTickets;

    // Ensure all status labels are included when grouping by status
    if (grouping === 'status') {
        allStatusLabels.forEach(status => {
            if (!columnsToRender[status]) {
                columnsToRender[status] = []; // Add empty array for statuses with no tasks
            }
        });
    }

    return (
        <div className="kanban-board">
            <div className="display-menu-bar">
                <DisplayMenu
                    grouping={grouping}
                    sorting={sorting}
                    onGroupingChange={setGrouping}
                    onSortingChange={setSorting}
                    isOpen={isMenuOpen}
                    setIsOpen={setIsMenuOpen}
                />
            </div>
            <div className="board-columns">
                {Object.entries(columnsToRender).map(([columnName, columnTickets]) => (
                    <TicketColumn
                        key={columnName}
                        title={columnName}
                        tickets={columnTickets}
                        grouping={grouping}
                        count={columnTickets.length}
                    />
                ))}
            </div>
        </div>
    );
}

export default KanbanBoard;