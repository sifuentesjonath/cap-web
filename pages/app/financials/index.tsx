import React from 'react';
import Financials from '@/containers/App/Financials';

import { FinancialsWithLayout } from '@/containers/App/Financials'
import AppLayout from '@components/layout/AppLayout'


const FinancialsPage:FinancialsWithLayout = () => {
  return (
    <Financials />
  )
}

FinancialsPage.layout = AppLayout;

export default FinancialsPage

// import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import classNames from 'classnames';
// import { FilterIcon } from '@heroicons/react/outline';

// import AppLayout from '@components/layout/AppLayout';
// import Checkbox from '@components/element/Checkbox';
// import ToggleGroup, { IToggleGroupOption } from '@components/block/ToggleGroup';
// import DatePicker from '@components/block/DatePicker/Popup';
// import Button from '@components/block/Button';

// import styles from './index.module.scss';
// import sampleData from './data.json';
// import { getFinancialGLTransactions } from '@/service/api';
// import { useAppSelector } from '@redux/hook';
// import { useSelector } from 'react-redux';
// import { Fragment } from 'react';
// import TableFinancials from '../../../components/block/TableFinancials';

// export interface IFinancialsProps {}
// type FinancialsWithLayout = React.FC<IFinancialsProps> & {
//   layout: typeof AppLayout;
// };

// const Financials: FinancialsWithLayout = props => {
//   const reportOptions = useMemo<IToggleGroupOption[]>(
//     () => [
//       { title: 'M', value: 'M' },
//       { title: 'Y', value: 'Y' },
//     ],
//     []
//   );


//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [showFilter, setShowFilter] = useState(false);
//   const [transactions, setTransactions] = useState(null);
//   const [propertyKeys, setPropertyKeys] = useState([])
//   const [propertyIds, setPropertyIds] = useState([])
//   const [payments, setPayments] = useState([]);
//   const [parkingPayments, setParkingPayments] = useState([]);
//   const [rentalPayments, setRentalPayments] = useState([]);
//   const [otherPayments, setOtherPayments] = useState([]);
//   const [maintenance, setMaintenance] = useState([]);
//   const [condoFees, setcondoFees] = useState([]);
//   const [pTaxes, setpTaxes] = useState([]);
//   const [condoFee, setcondoFee] = useState([]);
//   const toggleFilterSection = useCallback(() => {
//     setShowFilter(prev => !prev);
//   }, []);
//   const [checkedAll, setCheckedAll] = useState(false);
//   const LoggedUser =  useSelector((state :any)=>state.auth.email)
//   const initialRender = useRef(true);
//   const initialRender2 = useRef(true);
//   const initialRender3 = useRef(true);
  
  
//   useEffect(()=> {
//         const BringTransactions = async () => {
          
//              const financialTransactions =  await getFinancialGLTransactions(LoggedUser)
//                setTransactions({...financialTransactions.data})        
//               }    
//       BringTransactions()
//       .catch( err => {console.error(err)})
//   },
//   [])

//   useEffect(() => {
//     if(initialRender.current){
//       initialRender.current = false;
//     }  
//     else {
//            let propertykeys = Object.keys(transactions);
//            setPropertyKeys(propertykeys)

//            let propertyIds = propertykeys.map(id => {
//             let Id = id.split(" ");
//             let buildiumId =  Number.parseInt(Id[0])
//             return buildiumId 
//           })
//            setPropertyIds(propertyIds);
//           const payment: any[] = Object.values(transactions);
      
          
//           setPayments([...payment])
        
//           console.log(transactions);     
//       }
//   }, [transactions])


//   useEffect(()=> {
//     if(initialRender2.current){
//       initialRender2.current = false;
//     }  
//     else {
//     const Rentals = [];
//     const Parkings = [];
//     const Others = [];
//     const Ptaxes = [];
//     const Maintenance = [];
//     const CondooFees = [];
//     const CondooFee = [];
//         payments[0].forEach( payment => { 
//           const {Type,Name} = payment.GLAccount;
//           const {Amount, Date} = payment;
//           if(Type === "Income" && Name && typeof Name === "string")
//           { 
//               let name = Name.includes("Rental")?"Rent":
//                          Name.includes("Parking")?"Parking":"Other";
//               //CATEGORIZE
//                 switch(name){
//                   case "Rent":
//                     Rentals.push(payment);
//                     break;
//                   case"Parking":
//                     Parkings.push(payment);
//                     break;
//                   case"Other":
//                     Others.push(payment);
//                     break 
//                   default: 
//                    return "No matching type"
//                 }    
//             }
//             else if (Type === "Expense" && Name && typeof Name === "string")
//             {
//               let name =  Name.includes("Taxes")?"PTaxes":
//                           Name.includes("Maintenance")?"Maintenance":
//                           Name.includes("Condo")?"CondoFees":"CondooFee";
//               //CATEGORIZE
//                 switch(name){
//                   case "Ptaxes":
//                     Rentals.push(payment);
//                     break;
//                   case"Maintainance":
//                     Parkings.push(payment);
//                     break;
//                   case"CondoFees":
//                     Others.push(payment);
//                     break 
//                   case"CondooFee":
//                     Others.push(payment);
//                     break 
//                   default: 
//                    return "No matching type"
//                 }    

//             }
//         })
//         const sumSameMonthPayment=(payments:any[])=> {
//               if(payments.length>1){
//                   let payments_by_date = {}
//                   payments.forEach((element,i)=> {
//                          let arrayDate = element.Date.split("-")
//                          let month_year = `d${arrayDate[0]}_${arrayDate[1]}`
//                          if(payments_by_date.hasOwnProperty(`${month_year}`))
//                          {
//                            payments_by_date[`${month_year}`] = payments_by_date[`${month_year}`] + element.Amount;    
//                          }else{
//                           payments_by_date[`${month_year}`] =element.Amount;
//                          }
//                   });
//                    return payments_by_date;
//               }
    
//           }
//      const parkingPaymentsByMonth =Parkings.length>0?sumSameMonthPayment(Parkings):{};
//      const rentPaymentsByMonth =Rentals.length>0?sumSameMonthPayment(Rentals):{};
//      const otherPaymentsByMonth =Others.length>0?sumSameMonthPayment(Others):{};
//      const pTaxesExpensesByMonth =Others.length>0?sumSameMonthPayment(Ptaxes):{};
//      const condoFeesExpensesByMonth =Others.length>0?sumSameMonthPayment(CondooFees):{};
//      const maintenanceExpensesByMonth =Others.length>0?sumSameMonthPayment(Maintenance):{};
//      const condoFeeExpensesByMonth =Others.length>0?sumSameMonthPayment(CondooFee):{};

//           setOtherPayments([otherPaymentsByMonth]);
//           setParkingPayments([parkingPaymentsByMonth]);
//           setRentalPayments([rentPaymentsByMonth]);
//           setcondoFees([condoFeesExpensesByMonth]);
//           setcondoFee([condoFeeExpensesByMonth]);
//           setMaintenance([maintenanceExpensesByMonth]);
//           setpTaxes([pTaxesExpensesByMonth]);

        

    
//   }
// },
//   [payments])

//   useEffect(() => {
//     if(initialRender3.current){
//       initialRender3.current = false;
//     }  else{
//       console.log({otherPayments}, {rentalPayments},{parkingPayments} );
//     }

//   },
//   [otherPayments||rentalPayments||parkingPayments])

//   return (
//     <>
//       <div className="sub-body-container h-full w-full bg-white flex px-4 !py-3">
//         {/* filter section */}
//         <div
//           className={classNames('filter-section sub-section flex md:!flex', {
//             '!hidden': !showFilter,
//           })}
//         >
//           <h2 className="title">Select your rental condos</h2>
//           <span className="flex-1 w-full pl-3">
//             <Checkbox
//               checked={checkedAll}
//               onCheckedChange={setCheckedAll}
//               className="my-4"
//             >
//               Select All
//             </Checkbox>
//            {
//               propertyKeys && 
            
//               propertyKeys.map((propertyId, i) => {
//                   return <Checkbox key={i}> {propertyId} </Checkbox>
//                   })}
//           </span>
//           <ToggleGroup
//             options={reportOptions}
//             onValueChange={() => {}}
//             className="self-center w-full flex justify-center"
//             itemClassName={`font-medium border-primary border-2
//             rounded-full w-14 h-14 m-1 ${styles['toggle-item']}
//             text-center text-black text-base py-4`}
//           />
//           <span className="datepicker-container">
//             <DatePicker
//               date={startDate}
//               onChange={date => setStartDate(date)}
//             />
//             <DatePicker date={endDate} onChange={date => setEndDate(date)} />
//           </span>
//           <Button className="w-48 h-12">Run Report</Button>
//         </div>
//         {/* data table */}
//         <div
//           className={`w-full ml-3 md:ml-8 mr-3 ${styles['financial-table']}`}
//         >
//           <TableFinancials tittle="Incomes" data={{rentalPayments, parkingPayments, otherPayments}} />
//           <TableFinancials tittle="Expenses" data={{maintenance, pTaxes, condoFees, condoFee}} /> 
          
//         </div>
//         {/* filter toggel button */}
//         <button
//           onClick={toggleFilterSection}
//           className="md:hidden rounded-full fixed bottom-10 right-10 w-14 h-14 flex items-center justify-center bg-primary shadow-md text-white"
//         >
//           <FilterIcon className="w-10 h-10 stroke-current" />
//         </button>
//       </div>
//     </>
//   )
  
// };

// Financials.layout = AppLayout;

// export default Financials;
