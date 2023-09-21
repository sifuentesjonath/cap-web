import React, { useState, useRef, useEffect, useMemo, useContext } from 'react';
import { useQuery, QueryClient, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import router from 'next/router';
import moment from 'moment';
// Custom hook
import useChartViewsAndStyles from '@/hooks/useChartView';
// Types
import { PropertiesHome, ToChart, TitleHolderType } from './home';
// Context
import { AuthContext } from '@/contexts/AuthContextProvider';
// Components
import AppLayout from '@components/layout/AppLayout';
import StyledLoader from '@components/element/StyledLoader';
import ApexChart from '@components/block/CondooCharts/ApexChart';
import PropertiesMessage from './PropertiesMessage';
import GroupedButtons from './GroupedButtons/GroupedButtons';
// Helpers
import { ChartPaymentsType } from '@components/block/CondooCharts/chart';
// Service api
import { getPropertiesAdmin, getTitleholders, getOwnerDraw, } from '@/service/api';
// Style 
import {
	BaseContainer,
	GraphContainer,
	GraphPosition,
	PaymentText,
	PaymentsContainer,
	PaymentsToDateText,
	Title,
	UserHomeContainer,
	WelcomeContainer,
	GrayBox
} from './style'
import { useMediaQuery } from '@react-hook/media-query';
import { dimensions } from '@/scss/media';
import { PropertyAdminType } from '@/service/apiTypes';

export type HomeWithLayout = React.FC & { layout: typeof AppLayout };
const Home: HomeWithLayout = () => {
	const isDesktop = useMediaQuery(`(${dimensions.desktopSmall})`);
	const isMobile = !isDesktop;
	// User
	const { authProfile, setAuthProfile } = useContext(AuthContext);
	const LoggedUser = useSelector((state: any) => state.auth.Email);
	// Chart
	const [chartView, chartStyle] = useChartViewsAndStyles(isDesktop);
	const [dateView, setDateView] = useState<string>('y1');
	const [properties, setProperties] = useState<number>(null);
	const [totalAmount, setTotalAmount] = useState<number>(0);
	const [chartData, setChartData] = useState<ChartPaymentsType[]>(null);
	const [isLoading, setIsLoading] = useState(false);

	const onChartViewChange = (view: string): string => {
		if (view === '') return dateView;
		setDateView(view);
		return view;
	}

	const { data: propertiesResult, isSuccess: propertiesSuccess } = useQuery<PropertyAdminType[]>(
		['getPropertiesAdmin'], getPropertiesAdmin,
	);
	const { data: titleholdersResult, isSuccess: titleHolderSuccess } = useQuery<TitleHolderType[]>(
		['getTitleholders'], getTitleholders,
	);

	useEffect(() => { // Set properties message
		if (!propertiesSuccess) return;
		setProperties(propertiesResult.length);
	}, [propertiesResult]);

	useEffect(() => { // Get owner draws using titleholder buildium ids
		async function bringOwnerDraw(buildiumIds) {
			try {
				setIsLoading(true);
				const currentDate = moment().format('M/D/YYYY');
				const getOwnerDrawParams = {
					buildiumIds,
					// backend has default values like this:
					// startDate: 01/01/currentYear // endDate: 01/01/currentYear+1

					// startDate: '1/1/2020',
					// endDate: currentDate
				}
				const { data: _ownerDraw } = await getOwnerDraw(getOwnerDrawParams);
				const chartPayments = ToChart(_ownerDraw);

				// setOwnerDraw(data);
				setChartData(chartPayments);
			} catch (err) {

			} finally {
				setIsLoading(false);
			}
		}

		if (!titleHolderSuccess || !Array.isArray(titleholdersResult)) return

		const areTitleHoldersEmpty = titleholdersResult?.length == 0;
		if (areTitleHoldersEmpty) return;

		const buildiumIds = titleholdersResult
			.map(({ BuildiumId }) => BuildiumId)
			.filter((value) => Boolean(value));

		if (buildiumIds.length > 0) bringOwnerDraw(buildiumIds);
	}, [titleholdersResult]);

	return (
		<>
			{isLoading && <StyledLoader />}

			<UserHomeContainer isMobile={isMobile}>
				<BaseContainer>
					{isDesktop &&
						<WelcomeContainer className={`items-end`}>
							<div className={`content`}>
								<Title>Welcome back <span>{authProfile?.FirstName}</span></Title>
								<div className={`flex flex-row mb-4`}>
									{properties && <PropertiesMessage propertyLength={properties} />}
								</div>
							</div>
						</WelcomeContainer>
					}

					<GraphContainer isMobile={isMobile}>
						<div className={`flex flex-row`}>
							<PaymentsContainer className={`flex flex-col`}>
								<PaymentsToDateText>{`Payments ${dateView === 'all' ? 'to date' : ''}`}</PaymentsToDateText>
								<PaymentText>${totalAmount}</PaymentText>
							</PaymentsContainer>

							{isDesktop &&
								<GroupedButtons dateView={dateView}
									dateOptions={chartView}
									onViewChange={(value) => onChartViewChange(value)}
									chartStyle={chartStyle}
								/>
							}
						</div>

						<GraphPosition isMobile={isMobile}>
							<ApexChart isMobile={isMobile} payments={chartData} viewAs={dateView}
								onChartLoad={(payments) => setTotalAmount(payments)}
							/>
						</GraphPosition>


						{isMobile &&
							<GroupedButtons isMobile dateView={dateView}
								dateOptions={chartView}
								onViewChange={(value) => onChartViewChange(value)}
								chartStyle={chartStyle}
							/>
						}
					</GraphContainer>

					<GrayBox className="chart-gray-box" />
				</BaseContainer>
			</UserHomeContainer>
		</>
	);
};



Home.layout = AppLayout;

export default Home;
