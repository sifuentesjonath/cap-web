// export const DeviceSizes = { // Use this values to objects of below once is correct
// 	mobileSmall: {
// 		min: '0px',
// 		max: '389px'
// 	},
// 	mobile: {
// 		min: '389px',
// 		max: '809px'
// 	},
// 	tablet: {
// 		min: '810px',
// 		max: '999px'
// 	},
// 	desktopSmall: {
// 		min: '1000px',
// 		max: '1199px'
// 	},
// 	desktop: {
// 		min: '1200px',
// 		max: '1599px'
// 	},
// 	desktopLarge: {
// 		min: '1600px',
// 		max: '2800px'
// 	},
// }

export const dimensions = { // for using in useMediaQuery
	desktopExtraLarge: `@media(min-width: 2000px)  and (max-width: 5000px)`,
	desktopLarge: `min-width: 1600px`,
	desktop: `min-width: 1200px`,
	// desktopSmallHeight: `min-width: 1200px`,
	desktopSmall: `min-width: 1000px`,
	tablet: `min-width: 810px `,
	mobile: `max-width: 809px`,
	mobileSmall: `max-width: 389px`,
	mobileSmallHeight: `@media(min-height: 200px) and (max-height: 779px)`
}

export const media = { // media queries for using in styled components
	desktopExtraLarge: `${dimensions.desktopExtraLarge}`,
	desktopLarge: `@media(${dimensions.desktopLarge}) and (max-width:5000px)`,
	desktop: `@media(${dimensions.desktop}) and (max-width: 1599px)`,
	desktopSmall: `@media(${dimensions.desktopSmall}) and (max-width:1199px)`,
	tablet: `@media(${dimensions.tablet}) and (max-width: 999px)`,
	mobile: `@media (min-width: 389px) and (${dimensions.mobile})`,
	mobileSmall: `@media(${dimensions.mobileSmall})`,
	desktopSmallLanding: `@media(min-width: 1200px) and (max-width:1499px)`,
	/** use this media when you need more specific media about small screen heights */
	mobileSmallHeight: `${dimensions.mobileSmallHeight}`,
}

// export const deviceDimensions = {
// 	desktopLarge: '1600px',
// 	desktop: '1200px',
// 	desktopSmall: '1000px',
// 	tablet: '810px ',
// 	mobile: '810px',
// 	mobileSmall: '389px',
// }