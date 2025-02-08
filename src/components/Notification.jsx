import { X } from 'lucide-react';

export const Notification = ({ setShowPromo, text }) => {
	return (
		<div className="relative bg-red-800 text-white text-center py-2">
			<p className="text-sm">{text}</p>
			<button
				onClick={() => setShowPromo(false)}
				className="absolute right-4 top-2"
			>
				<X size={16} />
			</button>
		</div>
	);
};
