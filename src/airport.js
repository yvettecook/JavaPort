function Airport(){
	this.planes = [];
	this.passengers = [];
};

Airport.prototype.land = function(plane) {
	if(this.check(plane) === 'Plane not here')
		this.planes.push(plane);
	else return 'Plane already here';
};

Airport.prototype.addToRunway = function(plane) {
	if(this.check(plane) >= 0) return this.planes.splice(planeLocation, 1)[0];
	else return this.check(plane);
};

Airport.prototype.check = function(plane) {
	planeLocation = this.planes.indexOf(plane);
	if(planeLocation >= 0) return planeLocation;
	else return 'Plane not here';
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