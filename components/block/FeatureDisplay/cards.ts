// Icons
import booking from '@/public/images/feature_image_bookkeeping.png';
import tenant from '@/public/images/feature_image_tenant.png';
import maintenance from '@/public/images/feature_image_maintenance.png';
import leasing from '@/public/images/feature_image_leasing_2.png';
import turnover from '@/public/images/feature_image_turnover.png';
import financial from '@/public/images/feature_image_financial_reporting.png';
import rent from '@/public/images/feature_image_rent.png';
import bill from '@/public/images/feature_image_bill.png';

export const Cards = {
    tittle: [
        "Tenant Management",
        "Leasing",
        "Maintenance",
        "Turnover",
        "Bookkeeping",
        "Financial Reporting",
        "Rent Collection",
        "Bill Payments"
    ],

    information: [
        "Condoo directly manages all aspects of the tenant relationship. With Condoo, an owner can expect no more late night calls and tenant headaches. The Condoo property management team are experts in tenant relationship management and handle daily operational interactions with the highest degree of professionalism. With Condoo, owners can be sure that their tenants are being cared for by an attentive and competent manager.",
        "The Condoo team actively manages the occupancy of your unit to limit vacancy and ensure revenue remains consistent. When notice is provided that a unit will become vacant, Condoo prepares professional marketing materials and syndicates a listing for your property to a wide array of platforms. Once applications are received the owner is notified and provided with an opportunity to make a selection from a screened list of candidates.",
        "Condoo features a dedicated maintenance team to swiftly respond to maintenance requests. For regular wear and tear, such as leaky faucets or a broken laundry machine, the Condoo maintenance team will automatically fulfill the service request. Maintenance is then billed back to the unit with transparent tracking of time and material. In the case of significant unit damage, an inspection will be completed and a recommendation report will be prepared. The owner is then provided with an opportunity to opine on how they would like to resolve the damage.",
        "When it is time for old tenants to move out and new tenants to move in, Condoo takes each unit through a standardized operating procedure. Condoo ensures that the tenant leaving satisfies all move-out expectations and the unit is properly prepared for the new tenant to experience a flawless move-in. From the owner’s perspective, turnover feels almost unnoticeable. Owners receive a notification on their web app and can click to view their new tenants.",

        "The Condoo accounting team provides owners with professional and current accounting information that is continuously accessible via the Condoo app. Owners can view a detailed interface with rent & parking income, property tax, condo fees and maintenance charges. The Condoo app allows owners to dive into any line item and get an understanding of their revenue and expenses. When it is time to file taxes all information can be exported for an owner’s personal accountant to review.",
        "Owners can use the Condoo App’s beautiful interface to view their historical and forecasted free cash flow, income and expenses. The Condoo App enables owners to view their portfolio as a whole, as a sub-group of properties, or one property at a time. Ultimately, owners love Condoo’s financial reporting to help inform future investment decisions.",
        "Say goodbye to following up with tenants and hunting for rent payments each month. Condoo’s accounting team administers all monthly collections activities and professionally provides notices to tenants late on their payments. If the collection of payments becomes an issue, a professional and prompt formal warning and process will be taken to ensure the terms of the lease are respected.",
        "The Condoo team will administer, verify and reconcile all key monthly bills including condo fees, maintenance bills, and property tax. All bills are reviewable and searchable within the reporting dashboard and empowers owners to see all of their operating expenses. If an owner has questions on a given bill, they can use the Condoo App to inquire with the property manager."
    ]
    ,
    image: [
        "feature_image_tenant",
        "feature_image_leasing_2",
        "feature_image_maintenance",
        "feature_image_turnover",

        "feature_image_bookkeeping",
        "feature_image_financial_reporting",
        "feature_image_rent",
        "feature_image_bill"
    ]
}

export const getCardImage =(imageName:string):StaticImageData => {
    const images = {
        "feature_image_tenant": tenant,
        "feature_image_leasing_2": leasing,
        "feature_image_maintenance": maintenance,
        "feature_image_turnover": turnover,
        "feature_image_bookkeeping": booking,
        "feature_image_financial_reporting": financial,
        "feature_image_rent": rent,
        "feature_image_bill": bill
    }
    return images[imageName];
}