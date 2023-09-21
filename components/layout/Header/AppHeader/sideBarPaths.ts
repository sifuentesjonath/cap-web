import paths from '@utils/paths';
// Icons
import home from '@/public/images/home-menu.png';
import homeActive from '@/public/images/home-menu-active.png';
import financials from '@/public/images/financials-menu.png';
import financialsActive from '@/public/images/financials-menu-active.png';
import documents from '@/public/images/documents-menu.png';
import documentsActive from '@/public/images/documents-menu-active.png';
import propertiesActive from '@/public/images/properties-menu-active.png';
import properties from '@/public/images/properties-menu.png';
import ringBellActive from '@/public/images/app-menu-ringbell-active.png';
import ringBell from '@/public/images/app-menu-ringbell.png';

const SideBarPaths = [
	{
		name: 'Home',
		path: paths.app,
		image: {
			enabled: homeActive,
			disabled: home,
		}
	},
	{
		name: 'Financials',
		path: paths.appFinancials,
		image: {
			enabled: financialsActive,
			disabled: financials,
		}
	},
	{
		name: 'Documents',
		path: paths.appDocuments,
		image: {
			enabled: documentsActive,
			disabled: documents,
		}
	},
	{
		name: 'Properties',
		path: paths.appProperties,
		image: {
			enabled: propertiesActive,
			disabled: properties,
		}
	},
	{
		name: 'Notifications',
		path: paths.appNotifications,
		image: {
			enabled: ringBellActive,
			disabled: ringBell,
		}
	}
]

export default SideBarPaths;