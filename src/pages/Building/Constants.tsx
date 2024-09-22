import FloorComponent from '../Building/components/floor-components/FloorComponent';
import GateComponent from '../Building/components/gate-components/GateComponent';
import RoofComponent from '../Building/components/roof-components/RoofComponent';



const floors = [
    { floorName: '0', WindowType: 'CIRCLE', enterance: 'WINDOW', windowClassName: 'circle-build', rightComponent: RoofComponent },
    { floorName: '1', WindowType: 'RECTANGLE', enterance: 'WINDOW', windowClassName: 'rectangle-build', rightComponent: FloorComponent },
    { floorName: '2', WindowType: 'RECTANGLE', enterance: 'WINDOW', windowClassName: 'rectangle-build', rightComponent: FloorComponent },
    { floorName: '3', WindowType: 'RECTANGLE', enterance: 'WINDOW', windowClassName: 'rectangle-build', rightComponent: FloorComponent },
    { floorName: '4', WindowType: 'NONE', enterance: 'WINDOW', windowClassName: 'none-build', rightComponent: GateComponent },
  ];

  export default floors;
  