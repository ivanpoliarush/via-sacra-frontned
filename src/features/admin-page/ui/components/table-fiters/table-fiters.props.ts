import { TableFilter } from '../table/table.props';

export interface TableFiltersProps {
	filters?: TableFilter[];
	filtersState: Record<string, string | undefined>;
	onChangeFilter: (key: string, value: string | undefined) => void;
}
