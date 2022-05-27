# Taxi queue app

A local taxi association needs some help to manage queues at some of their taxi ranks.

<span style="float: left">
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
	<img src="arrow.png" alt="" width="100" style="display:inline-block">
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
</span>

They need a web widget which rank managers can use to keep track of how many people are joining and leaving the queue. Once there are enough people in the queue they can board the taxi. Taxis are also queueing and people can only board a taxi if there is at least one taxi in the queue.

## Instructions

The widget should keep track off:

* People joining the queue 
	- add 1 to the queue
* People leaving the queue 
	- remove 1 from the queue
* Taxis joining the queue 
	- add 1 to the taxi queue
* Taxis leaving the queue:
	- remove 1 from the taxi queue
	- remove 12 people from the people queue
* A taxi can only leave if there are enough people (12 people) in the queue to fill the taxi.

## Please ensure

* HTML & CSS for this widget in `index.html`
* Some failing unit tests that you need to stop failing by implementing the TaxiQueue Factory Function in `taxi-queue.js`. Don't change the test file `test/taxi-queue.test.js`
* A Factory function skeleton is in the `taxi-queue.js` file.
* Implement the DOM functionality in the `taxi-queue.dom.js` file.

## Add localStorage

Once your widget is done store all the queue counters in localStorage be sure that the data is shown correctly after a refresh.
### Add a unit test for localStorage
Add a unit test/s to show that your Factory Function's constructor can initialize the people and taxi queue count.
