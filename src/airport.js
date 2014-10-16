function Airport(){
	this.planes = [];
	this.passengers = [];
};

Airport.prototype.land = function(plane) {
	if(this.isPlaneNotHere(plane)) this.planes.push(plane);
};

Airport.prototype.addToRunway = function(plane) {
	if(this.isPlaneHere(plane)) return this.planes.splice(this.findPlane(plane), 1)[0];
};

Airport.prototype.findPlane = function(plane) {
	return this.planes.indexOf(plane);
};

Airport.prototype.isPlaneHere = function(plane) {
	if(this.planes.indexOf(plane) !== -1) return true
};

Airport.prototype.isPlaneNotHere = function(plane) {
	if(this.planes.indexOf(plane) === -1) return true
};

Airport.prototype.checkIn = function(passenger) {
	this.passengers.push(passenger);
};

Airport.prototype.checkOut = function(passenger) {
	this.passengers.pop();
};

Airport.prototype.numberOfPlanes = function() {
	return this.planes.length;
};