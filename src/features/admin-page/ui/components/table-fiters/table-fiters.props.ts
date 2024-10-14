import { TableFilter } from '../table/table.props';

export interface TableFiltersProps {
	onApply: () => void;
	selectedRows: string[];
	handleDelete: () => void;
	filters?: TableFilter[];
	filtersState: Record<string, string | undefined>;
	onChangeFilter: (key: string, value: string | undefined) => void;
}
