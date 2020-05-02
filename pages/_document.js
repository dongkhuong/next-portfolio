import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for my programming portfolio" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main /> 
                    <NextScript />
                </body>
                {/* <style global jsx>{`
                    body {
                        font-family: 'Dancing Script', cursive;
                    }
                `}
                </style> */}
            </html>
        )
    }
}