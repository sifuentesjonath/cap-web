import { FC } from 'react'
import Head from "next/head";
import pages from './pages.json'
import { useRouter } from 'next/router'

interface IPageHeadProps { }
const PageHead: FC<IPageHeadProps> = () => {
	const { pathname } = useRouter();
	const { title, description } = pages[pathname] ?? { title: 'Condoo', description: 'Cruise control for condo landlords' };
	const condooDomainUrl = `https://www.condoo.io`;
	return (
		<Head key={'condoo-head'}>
			<title>{title}</title>;
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name='description' content={description} />
			<link title={title} href={condooDomainUrl} hrefLang="en-us" rel="alternate" type="text/html" />
			<link rel="alternate" href={condooDomainUrl} hrefLang="x-default" />
			{/* Set favicon */}
			<link rel="icon" href="favicon.ico" />
			{/* <link rel="shortcut icon" type="image/ico" href="favicon.ico" /> */}
		</Head>
	)
}

export default PageHead