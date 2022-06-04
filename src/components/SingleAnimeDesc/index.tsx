import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NoSsr from 'helpers/noSsr';

interface Props {
  desc: {
    html: string;
  };
}

const SingleAnimeDesc = ({ desc }: Props) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '800px', marginTop: '5em' }}>
        <Typography variant="h4" component="h2" fontWeight={500} gutterBottom>
          Description:
        </Typography>
        <NoSsr>
          <Typography variant="body2" component="p">
            <span
              dangerouslySetInnerHTML={{ __html: desc.html }}
              className="desc"
            />
          </Typography>
        </NoSsr>
      </Box>
    </Box>
  );
};

export default SingleAnimeDesc;
