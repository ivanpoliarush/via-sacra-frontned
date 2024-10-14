import { TableColumn } from '../table/table.props';

export interface TableColumnProps {
	item: Record<string, string>;
	columns: TableColumn[];

	isSelected: (item: any) => boolean;
	handleSelect: (item: any) => void;
}
