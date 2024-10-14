import { ReactNode } from 'react';

export interface TableColumn {
	label: string;
	key: string;
	widthPercent: number;
	changeRender?: (value: string) => ReactNode | string;
}

export type TableFilter =
	| {
			type: 'search';
			label: string;
			key: string;
			placeholder?: string;
	  }
	| {
			type: 'select';
			label: string;
			key: string;
			defaultLabel: string;
			options: { label: string; value: string }[];
	  };

export type DataResponse =
	| {
			type: 'success';
			items: any[];
			pagination: {
				isLastPage: boolean;
			};
	  }
	| {
			type: 'error';
			error: string;
	  };

export interface TableProps<T = TableColumn[]> {
	columns: T;
	filters?: TableFilter[];
	getData: (
		filters: Record<string, string>,
		page: number,
	) => Promise<DataResponse>;
	deleteItems: (items: any[]) => Promise<void>;
}