import { DataResponse, TableColumn } from '../table/table.props';

export interface TableBodyProps {
	data: DataResponse | null;
	loading: boolean;
	error: boolean;
	columns: TableColumn[];

	isSelected: (item: any) => boolean;
	handleSelect: (item: any) => void;
}
