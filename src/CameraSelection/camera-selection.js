import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CameraSelection.css';
 
// http://tie.digitraffic.fi/api/v1/metadata/camera-stations
// http://tie.digitraffic.fi/api/v1/data/camera-data/{id}
const cameras = [
    { presetId: '', name: '-' },
    { presetId: 'C0854701', name: 'Joensuu Reijola' },
    { presetId: 'C0854901', name: 'vt6_Joensuu_Honkavaara' },
    { presetId: 'C0857601', name: 'vt6_Joensuu_Repokallio' },
    { presetId: 'C0858701', name: 'vt9_Kuopio_Jännevirta_Silta' },
    { presetId: 'C0855301', name: 'vt6_Kontiolahti_Varparanta' },
    { presetId: 'C0854601', name: 'vt6_Kontiolahti_Uuro' },
    { presetId: 'C0852401', name: 'vt5_Kuopio_Päiväranta' }
]
 
class CameraSelection extends Component {
 
    selectionChanged = (event) => {
        console.log("Selected:" + event.target.value);
        this.props.onSelect(event.target.value);
    }
 
    render = () => {
        const { selectedPresetId } = this.props;
        return <div className="Camera-selection-container">
            <div className="Camera-selection-text">
                Select camera to show:<br />
                <form>
                    <select onChange={this.selectionChanged} value={selectedPresetId}>
                        {
                            cameras.map((cam, i) =>
                                <option
                                    key={'selection_' + i}
                                    value={cam.presetId}>
                                    {cam.name}
                                </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    }
}
 
CameraSelection.propTypes = {
    selectedPresetId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}
 
export default CameraSelection;

