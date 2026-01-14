import React, { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
}

interface InteractiveTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  searchable?: boolean;
  className?: string;
  emptyMessage?: string;
}

type SortDirection = 'asc' | 'desc' | null;

export default function InteractiveTable<T extends Record<string, any>>({
  data,
  columns,
  searchable = true,
  className = '',
  emptyMessage = 'No data available'
}: InteractiveTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const filteredAndSortedData = useMemo(() => {
    let filtered = data;

    // Apply search filter
    if (searchTerm) {
      filtered = data.filter(item =>
        columns.some(column => {
          const value = item[column.key];
          return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply sorting
    if (sortColumn && sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, sortColumn, sortDirection, columns]);

  const handleSort = (columnKey: keyof T) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    if (sortColumn === columnKey) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      }
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (columnKey: keyof T) => {
    if (sortColumn !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    }

    if (sortDirection === 'asc') {
      return <ArrowUp className="w-4 h-4" />;
    }

    if (sortDirection === 'desc') {
      return <ArrowDown className="w-4 h-4" />;
    }

    return <ArrowUpDown className="w-4 h-4 opacity-50" />;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {searchable && (
        <div className="table-filter">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full table-sortable">
          <thead>
            <tr className="border-b">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`text-left py-3 px-4 font-medium ${
                    column.sortable ? 'cursor-pointer hover:text-primary' : ''
                  }`}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-8 text-muted-foreground"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              filteredAndSortedData.map((item, index) => (
                <tr key={index} className="table-row border-b animate-fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                  {columns.map((column) => (
                    <td key={String(column.key)} className="py-3 px-4">
                      {column.render
                        ? column.render(item[column.key], item)
                        : String(item[column.key] || '')
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredAndSortedData.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredAndSortedData.length} of {data.length} entries
          {searchTerm && ` (filtered from "${searchTerm}")`}
        </div>
      )}
    </div>
  );
}