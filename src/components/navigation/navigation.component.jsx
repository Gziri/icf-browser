import React from 'react';
import './navigation.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIcfBundle } from '../../redux/main/main.selector';

const Navigation = ({icfBundle}) =>(
<div className=''>
    <span>{icfBundle}</span>
</div>
)

const mapStateToProps = createStructuredSelector({
    icfBundle: selectIcfBundle
})

export default connect(mapStateToProps)(Navigation);