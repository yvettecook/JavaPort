describe ('An airport', function() {

	beforeEach(function() {
			airport = new Airport;
			plane = new Plane;
			newPlane = new Plane;
			evenNewerPlane = new Plane;
	});

	describe('has a capacity to hold', function() {

		it('planes ', function() {
			expect(airport.planes).toEqual([]);
		});

		it('passengers', function() {
			expect(airport.passengers).toEqual([]);
		});

	});

	describe('when interacting with planes', function() {

		it('can add', function() {
			airport.land(plane);
			expect(airport.planes).toEqual([plane]);
		});

		it('can release', function() {
			airport.land(plane);
			expect(airport.addToRunway(plane)).toBe(plane)
		});

		it('can tell how many planes are at the airport', function(){
			airport.land(plane)
			expect(airport.numberOfPlanes()).toEqual(1)
		});

		it('can return the location of a plane at the airport', function(){
			airport.land(plane)
			airport.land(newPlane)
			airport.land(evenNewerPlane)
			expect(airport.check(newPlane)).toBe(1)
		});

		it('can return if a plane is at the airport', function() {
			airport.land(plane)
			airport.land(newPlane)
			expect(airport.isPlaneHere(plane)).toBe(true)
		});

		it('can return if a plane is not at the airport', function() {
			expect(airport.isPlaneNotHere(plane)).toBe(true);
		});

		it('cannot release planes that are not at the airport', function() {
			airport.land(plane);
			expect(airport.addToRunway(newPlane)).toBe('Plane not here');
		});

		it('cannot land planes that are already at the airport', function(){
			airport.land(plane)
			expect(airport.land(plane)).toBe('Plane already here')
			expect(airport.numberOfPlanes()).toEqual(1)
		});

	});

	describe('when interacting with passengers', function() {

		it('can check in', function() {
			passenger = new Passenger;
			airport.checkIn(passenger);
			expect(airport.passengers).toEqual([passenger]);
		});

		it('can check out', function(){
			passenger = new Passenger;
			airport.checkIn(passenger);
			airport.checkOut(passenger);
			expect(airport.passengers).toEqual([]);
		});

	});

});