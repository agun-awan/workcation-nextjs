import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render(){
		return(
			<html>
				<head>
					<title> Homestay Indramayu | Next </title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico" />
					<link rel='stylesheet' href="_next/static/css/styles.chunk.css" />

					<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
				</head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}