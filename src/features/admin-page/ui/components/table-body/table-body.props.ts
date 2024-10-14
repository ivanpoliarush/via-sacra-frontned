import { DataResponse, TableColumn } from '../table/table.props';

export interface TableBodyProps {
	data: DataResponse | null;
	loading: boolean;
	error: boolean;
	columns: TableColumn[];
}
