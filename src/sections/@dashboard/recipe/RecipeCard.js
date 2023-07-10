import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Link, Typography, Stack, Chip, CardActionArea, Slide, Grow } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useState, useRef } from 'react';

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
    const {id, name, prepTime, description, image, tags} = recipe

    const [showFavoriteIcon, setShowFavoriteIcon] = useState(false);
    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        setShowFavoriteIcon(true);
    }

    const handleMouseLeave = () => {
        setShowFavoriteIcon(false);
    }

    const addToFavorite = (id) => {
        alert(`Recipe ${id} was added to favorites`);
    }

    return (
        <Grow in='true' timeout='auto'>

        <Card
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}>
            <Slide direction='down' in={showFavoriteIcon} container={containerRef.current}>
                <Icon sx={styles.iconUnchecked}
                    onClick={() => addToFavorite(id)}>favorite_border</Icon>
            </Slide>
            <CardActionArea onClick={() => alert(description)}>
                <Box sx={{ pt: '100%', position: 'relative' }}>
                    <StyledProductImg alt={name} src={image} />
                </Box>

                <Stack spacing={2} sx={{ p: 3 }}>
                    <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {name}
                    </Typography>
                    </Link>

                    <Stack spacing={2}>
                        <Stack direction="row" spacing={1}>
                            <Icon>timer</Icon>
                            <Typography variant="body1" noWrap>
                                {prepTime} min
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            {tags.map((tag) => (
                                <Chip icon={<Icon>{tag.icon}</Icon>} label={tag.title} key={tag.title} color={tag.color} variant='outlined'/>
                            ))}
                        </Stack>
                    </Stack>

                    {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <ColorPreview colors={colors} />
                    <Typography variant="subtitle1">
                        <Typography
                        component="span"
                        variant="body1"
                        sx={{
                            color: 'text.disabled',
                            textDecoration: 'line-through',
                        }}
                        >
                        {priceSale && fCurrency(priceSale)}
                        </Typography>
                        &nbsp;
                        {fCurrency(price)}
                    </Typography>
                    </Stack> */}
                </Stack>
            </CardActionArea>
        </Card>
        </Grow>
    )
}

const styles = {
    iconUnchecked: {
        position: 'absolute',
        zIndex: 1, 
        top: 5, 
        right: 10, 
        color: 'white', 
        cursor: 'pointer'
    }
};