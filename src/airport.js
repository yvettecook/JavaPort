function Airport(){
	this.planes = [];
	this.passengers = [];
};

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
};

Airport.prototype.addToRunway = function(plane) {
	if(this.check(plane) >= 0)
	 return this.planes.splice(planeLocation, 1)[0];
	else return this.check(plane);
};

Airport.prototype.check = function(plane) {
	planeLocation = this.planes.indexOf(plane);
	if(planeLocation >= 0) return planeLocation;
	else return 'Plane not here';
};