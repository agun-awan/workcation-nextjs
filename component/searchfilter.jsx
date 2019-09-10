import React from 'react';

class Filter extends React.Component{
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
			<div>
				<section className="bg-gray-800">
					<div className="flex justify-between px-4 py-3">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center">
								<svg className="h-8 w-8 fill-current text-gray-600 pl-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24"><path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path></svg>
							</div>
							<input className="bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search by keywords" />
						</div>

						<button onClick={this.toggle} className="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4">
							<svg className="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24"><path d="M 3 3 L 3 5 L 21 5 L 21 3 L 3 3 z M 5 7 L 10 13 L 10 21 L 14 21 L 14 13 L 19 7 L 5 7 z"></path></svg>
							<span className="ml-1 text-white font-medium">Filters</span>
						</button>
					</div>

					{this.state.isOpen ?
					<form>
						<div className="px-4 py-4 border-t border-gray-900 sm:flex">
							<div className="flex -mx-2 sm:w-1/2 sm:mx-0">
								<label className="block w-1/2 px-2">
									<span className="text-sm font-semibold text-gray-500">Bedrooms</span>
									<select className="mt-1 form-select block w-full text-white shadow">
										<option>4</option>
									</select>
								</label>

								<label className="block w-1/2 px-2">
									<span className="text-sm font-semibold text-gray-500">Bathrooms</span>
									<select className="mt-1 form-select block w-full text-white shadow">
										<option>2</option>
									</select>
								</label>
							</div>
							<div className="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
								<label className="sm:px-2">
									<span className="text-sm font-semibold text-gray-500">Price Range</span>
									<select className="mt-1 form-select block w-full text-white shadow">
										<option>Up to IDR 1,000,000/wk</option>
									</select>
								</label>
							</div>
						</div>

						<fieldset className="px-4 py-4 border-t border-gray-900">
							<span className="block text-sm font-semibold text-gray-500">Property Type</span>
							<label className="mt-3 flex items-center">
								<input className="form-radio bg-gray-900" type="radio" name="propertyType" value="house" />
								<span className="ml-2 text-white">House</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-radio bg-gray-900" type="radio" name="propertyType" value="apartment" />
								<span className="ml-2 text-white">Apartment</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-radio bg-gray-900" type="radio" name="propertyType" value="loft" />
								<span className="ml-2 text-white">Loft</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-radio bg-gray-900" type="radio" name="propertyType" value="townhouse" />
								<span className="ml-2 text-white">Townhouse</span>
							</label>
						</fieldset>

						<fieldset className="px-4 py-4 border-t border-gray-900">
							<span className="block text-sm font-semibold text-gray-500">Amenities</span>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="balcony"  />
								<span className="ml-2 text-white">Balcony</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="pool" />
								<span className="ml-2 text-white">Pool</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="beach" />
								<span className="ml-2 text-white">Beach</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="petFriendly" />
								<span className="ml-2 text-white">Pet friendly</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="kidFriendly" />
								<span className="ml-2 text-white">Kid friendly</span>
							</label>
							<label className="mt-3 flex items-center">
								<input className="form-checkbox bg-gray-900" type="checkbox" name="parking" />
								<span className="ml-2 text-white">Parking</span>
							</label>
						</fieldset>

						<div className="bg-gray-900 px-4 py-4">
							<button className="block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
						</div>
					</form>
					: null
					}
				</section>
			</div>
		);
	}
}

export default Filter;