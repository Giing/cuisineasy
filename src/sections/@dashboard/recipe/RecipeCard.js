import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Link, Typography, Stack } from '@mui/material';

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  });

RecipeCard.propTypes = {
    recipe: PropTypes.object
}

export default function RecipeCard({recipe}) {
    const {title, description, image, labels} = recipe

    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <StyledProductImg alt={title} src={image} />
            </Box>
        </Card>
    )
}