import { TableFilter } from '../table/table.props';

export interface TableFiltersProps {
	filters?: TableFilter[];
	filtersState: Record<string, string>;
	onChangeFilter: (key: string, value: string) => void;
}
