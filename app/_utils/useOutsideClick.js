import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
	const ref = useRef();

	// closing modal by clicking somewhere outside of it
	useEffect(
		function () {
			function handleClick(e) {
				if (ref.current && !ref.current.contains(e.target)) {
					handler();
				}
			}
			// passing in 3rd argument: true, so event will be handled in capturing fase (as the event moves down the dom tree), not bubbling
			document.addEventListener(
				"click",
				handleClick,
				listenCapturing
			);

			return () =>
				document.removeEventListener(
					"click",
					handleClick,
					listenCapturing
				);
		},
		[handler, listenCapturing]
	);

	return ref;
}
