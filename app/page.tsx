import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Demo from '@/components/Demo';

export const metadata = {
  title: 'App',
  description: 'App',
};

/**
 * Startseite.
 */
export default function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          App-Vorlage
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Eine einfache Start Vorlage für NEXT.js 14 App-Router und MUI.
        </Typography>

          <Demo />
        
      </Container>
    </Box>
  );
};
