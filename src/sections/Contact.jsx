import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
	return (
		<div className="lg:col-span-12 mt-12 border-t  border-red-700 pt-12">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* Contact Details */}
				<div className="space-y-4">
					<h3 className="text-white font-medium text-xl mb-6">Contact Us</h3>
					<div className="flex items-start space-x-3">
						<MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
						<p className="text-sm">
							291 Carriedo St. Brgy. Muzon
							<br />
							San Jose Del Monte, Bulacan
						</p>
					</div>
					{/* <div className="flex items-center space-x-3">
						<Phone className="w-5 h-5 flex-shrink-0" />
						<p className="text-sm">+1 (555) 123-4567</p>
					</div> */}
					<div className="flex items-center space-x-3">
						<Mail className="w-5 h-5 flex-shrink-0" />
						<p className="text-sm">thegirlandherstory@gmail.com</p>
					</div>
				</div>

				{/* Business Hours */}
				<div className="space-y-4">
					<h3 className="text-white font-medium text-xl mb-6">
						Business Hours
					</h3>
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span>Monday - Friday</span>
							<span>9:00 AM - 8:00 PM</span>
						</div>
						<div className="flex justify-between text-sm">
							<span>Saturday</span>
							<span>10:00 AM - 6:00 PM</span>
						</div>
						<div className="flex justify-between text-sm">
							<span>Sunday</span>
							<span>10:00 AM - 4:00 PM</span>
						</div>
					</div>
				</div>

				{/* Map */}
				<div className="space-y-4">
					<h3 className="text-white font-medium text-xl mb-6">Find Us</h3>
					<div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
						<img
							src="/api/placeholder/400/320"
							alt="Store Location Map"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
