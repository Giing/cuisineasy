import PropTypes from 'prop-types';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, Link, Typography, Stack, Chip } from '@mui/material';
import Icon from '@mui/material/Icon';

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
    const {name, description, image, tags} = recipe
    console.log(tags)

    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <StyledProductImg alt={name} src={image} />
            </Box>
            <Stack spacing={2} sx={{ p: 3 }}>
                <Link color="inherit" underline="hover">
                <Typography variant="subtitle2" noWrap>
                    {name}
                </Typography>
                </Link>

                <Stack>
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
        </Card>
    )
}