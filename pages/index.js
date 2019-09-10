import Menu from '../component/menus.jsx';
import Content from '../component/content.jsx';
import Filter from '../component/searchfilter.jsx';
import './app.scss';

const Index = () => (
	<section>
		<Menu />
		<Filter />
		<Content />
	</section>
);

export default Index;