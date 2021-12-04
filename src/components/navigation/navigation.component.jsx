import React from 'react';
import './navigation.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIcfBundle } from '../../redux/icf/icf.selector';

const Navigation = ({icfBundle}) =>{
    console.log("test")
    return(
<div className=''>
    {/* <span>{icfBundle}</span> */}
    <span>"asd"</span>
</div>
)}

const mapStateToProps = createStructuredSelector({
    icfBundle: selectIcfBundle
})

export default connect(mapStateToProps)(Navigation);