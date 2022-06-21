function TaxiQueue() {

	let queueCount = 0;
	let taxiCount = 0;

	function joinQueue() {
		queueCount++

	}

	function leaveQueue() {
		if (queueCount >= 0 && queueCount !== 0) {
			queueCount--
		}

	}

	function joinTaxiQueue() {
		taxiCount++
	}

	function queueLength() {
		return queueCount
	}

	function taxiQueueLength() {
		return taxiCount;

	}

	function taxiDepart() {
		if (queueCount == 12 && taxiCount > 0) {
			queueCount - 12
			taxiCount - 1
		}
	
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}