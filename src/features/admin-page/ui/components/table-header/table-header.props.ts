import { TableColumn } from '../table/table.props';

export interface TableHeaderProps {
	isAllSelected: boolean;
	handleSelectAll: () => void;
	columns: TableColumn[];
	pagination: {
		isFirstPage: boolean;
		isLastPage: boolean;

		nextPage: () => void;
		prevPage: () => void;
	};
}
