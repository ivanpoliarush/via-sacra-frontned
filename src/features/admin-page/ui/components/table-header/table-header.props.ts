import { TableColumn } from '../table/table.props';

export interface TableHeaderProps {
	columns: TableColumn[];
	pagination: {
		isFirstPage: boolean;
		isLastPage: boolean;

		nextPage: () => void;
		prevPage: () => void;
	};
}
