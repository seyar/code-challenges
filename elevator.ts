const HIGH_FLOOR = 5;
const GROUND_FLOOR = 1;
class Elevator {
    private _onBeforeFloorCb: (floor: number, reach: boolean) => void;
    constructor (options) {
        this._onBeforeFloorCb = options.onBeforeFloorCb;
    }

    position: number = 1;

    direction: 'up' | 'down' | 'idle' = 'idle';

    goTo(floor: number) {
        if (floor > this.position) {
            this.goUp(floor);
        } else if (floor < this.position) {
            this.goDown(floor);
        } else {
            this._onBeforeFloorCb(floor, true);
        }
    }

    private goUp(floor: number): void {
        for(let i = this.position; i <= floor; i++) {
            this.direction = i !== floor ? 'up' : 'idle';
            this.position = i;
            this._onBeforeFloorCb(i, i === floor);
        }
    }

    private goDown(floor: number): void {
        for(let i = this.position; i >= floor; i--) {
            this.direction = i !== floor ? 'down' : 'idle';
            this.position = i;
            this._onBeforeFloorCb(i, i === floor);
        }
    }
}

class Building {
    private elevator: Elevator;
    private _cameCb: (number: Elevator) => void = () => {};

    constructor() {
        const cb = this._onBeforeFloor.bind(this);
        this.elevator = new Elevator({onBeforeFloorCb: cb});
    }

    callButton(initalFloor: number, direction: 'up' | 'down', cameCb: (number: Elevator) => void) {
        this._cameCb = cameCb.bind(cameCb);
        // optimise go to.
        this.elevator.goTo(initalFloor);
    }

    private _onBeforeFloor(floor: number, reach: boolean): void {
        console.log("floor = ", floor, this.elevator.direction);
        if (reach) {
            this._cameCb(this.elevator);
            this._cameCb = () => {}
        }
    }
}

const building = new Building();

// 2 -> 5
building.callButton(2, 'up', (elevator) => {
    elevator.goTo(5);
});

// 3 -> 1
// building.callButton(3, 'up', (elevator) => {
//     elevator.goTo(1);
// });

// // 5 -> 5
// building.callButton(5, 'up', (elevator) => {
//     elevator.goTo(5);
// });

// // 1 -> 5, 3 -> 5
// building.callButton(1, 'up', (elevator) => {
//     elevator.goTo(5);
// });
// building.callButton(3, 'up', (elevator) => {
//     elevator.goTo(5);
// });

// // 1 -> 5 | 3 -> 1
// building.callButton(1, 'up', (elevator) => {
//     elevator.goTo(5);
// });
// building.callButton(3, 'up', (elevator) => {
//     elevator.goTo(1);
// });

