import { X } from 'lucide-react';
import { useState } from 'react';

export const Notification = ({ text }: { text: string }) => {
	const [showNotif, setShowNotif] = useState(true);
	if (!showNotif) return;
	return (
		<aside className="relative p-2 text-center bg-[#7d1616] text-white sm:p-4 md:p-2">
			<p className="font-extralight text-xs uppercase sm:text-sm md:text-xs">
				{text}
			</p>
			<X
				size={20}
				onClick={() => setShowNotif(false)}
				className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#7d1616] sm:right-3"
			/>
		</aside>
	);
};
