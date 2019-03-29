import * as React from 'react';
import {withLeaflet} from 'react-leaflet';

export interface Props  {
   
}

class _ReactLeafletMarkerCluster extends React.Component<Props> {     
    constructor(props: Props, context?: any) {
      super(props, context);      
    }  

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

    }
    
    render() {
      return (
        null
      );
    }
}

export const ReactLeafletMarkerCluster = withLeaflet(_ReactLeafletMarkerCluster);