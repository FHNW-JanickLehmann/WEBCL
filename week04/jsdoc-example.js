class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Get the x value.
     * @returns {number} The x value.
     */
    getX() {
        return this.x;
    }

    /**
     * Get the y value.
     * @returns {number} The y value.
     */
    getY() {
        return this.y;
    }

    /**
     * Calculate the distance between this point and another point.
     * @param {Point} point - The other point.
     * @returns {number} The distance between the two points.
     */
    calculateDistance(point) {
        return Math.sqrt(Math.pow(point.getX() - this.x, 2) + Math.pow(point.getY() - this.y, 2));
    }
}

// Export the Point class.
module.exports = Point;

/**
 * Test the Point class.
 */
function test() {
    // Create a point.
    const point1 = new Point(1, 2);
    const point2 = new Point(4, 6);

    // Calculate the distance between the two points.
    const distance = point1.calculateDistance(point2);
    console.log(distance);
}