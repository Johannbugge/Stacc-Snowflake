import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './progressIndicator.module.css';

const ProgressIndicator = () => {
	return (
		<div className={styles.progress}>
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		</div>
	);
};

export default ProgressIndicator;
