import React, { Component } from 'react';

class Dropdown extends Component {

    render() { 
        const { name, id } =this.props;
        const idx= "#"+id.toString();

        return ( 
            <a href={idx} data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">{name}</a>
         );
    }
}
 
export default Dropdown;
