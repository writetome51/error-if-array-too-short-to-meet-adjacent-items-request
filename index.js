// Triggers error if array doesn't have enough items.
// startingIndex can be negative or positive.

export function errorIfArrayTooShortToMeetAdjacentItemsRequest(
	startingIndex, numberRequested, arrayLength
) {
	if (startingIndex < 0) startingIndex = (arrayLength + startingIndex);
	if ((startingIndex + numberRequested) > arrayLength) {
		throw new Error('the array does not have enough items to fulfill your request');
	}
}
