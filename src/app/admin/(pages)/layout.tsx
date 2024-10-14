import { AdminHeader } from '@/features/admin-page/ui/components/header/header';
import { ReactNode } from 'react';

const AdminPagesLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<AdminHeader />
			{children}
		</>
	);
};

export default AdminPagesLayout;
