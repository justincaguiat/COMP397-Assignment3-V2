var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Car = (function (_super) {
        __extends(Car, _super);
        //CONSTRUCTOR
        function Car(name, lane) {
            _super.call(this, assetLoader.getResult(name));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._lane = lane;
            this.x = 720;
            this.y = (32 + this.height * 0.5) + ((this.height + 2) * this._lane);
            console.log("Lane " + this._lane + ": " + this.y);
            this._dx = Math.floor((Math.random() * 3) + 4);
            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        //PUBLIC METHODS
        Car.prototype.update = function () {
            this.x -= this._dx;
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        Car.prototype.reset = function () {
            this.x = 720;
            this._dx = Math.floor((Math.random() * 4) + 5);
        };
        return Car;
    })(createjs.Bitmap);
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map