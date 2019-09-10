import React from 'react';
import Link from 'next/link';

class Menus extends React.Component{
	
	state = {
		isOpen: false,
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render(){
		const { isOpen } = this.state;

		return (
			<div className="bg-gray-200 antialiased">
				<header className="bg-gray-900">
					<div className="flex justify-between px-4 py-3">
						<div>
							<img className="h-8 w-auto" src="http://railsgirls.com/images/buenosaires/gdg.png" />
						</div>

						<div className="flex">
							<button type="button" onClick={this.toggle} className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
								<svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
								{(!isOpen) ?
									<path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
								:
									<path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
								}
								</svg>
							</button>
						</div>
					</div>				
					
					{this.state.isOpen && 
						<nav id="hideThis" className="inline-block">
							<div className="px-2 pt-2 pb-5 border-b border-gray-800">
								<Link href="/">
									<a className="block px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800">List your property</a>
								</Link>
								<Link href="/">
									<a className="mt-1 block px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800">Trips</a>
								</Link>
								<Link href="/">
									<a className="mt-1 block px-3 py-1 rounded leading-tight font-semibold text-white hover:bg-gray-800">Message</a>
								</Link>
							</div>

							<div className="px-5 py-5">
								<div className="flex items-center">
									<img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="" />
									<span className="ml-4 font-semibold text-gray-200">John Doe</span>
								</div>

								<div className="mt-5">
									<Link href="/">
										<a className="block text-gray-400 hover:text-white">Account settings</a>
									</Link>
									<Link href="/">
										<a className="mt-3 block text-gray-400 hover:text-white">Support</a>
									</Link>
									<Link href="/">
										<a className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
									</Link>
								</div>
							</div>
						</nav>
					}
				</header>
			</div>
		);
	}
}

export default Menus;