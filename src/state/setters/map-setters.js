import { uniq } from "lodash";
import state from "../../state";

export const setMap = map => (state.maps[map.id] = map);

export const setCurrentMapId = mapId => (state.maps.currentMapId = mapId);
