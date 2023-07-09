import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import RecipeList from '../sections/@dashboard/recipe/RecipeList';
import recipes from '../_mock/recipes';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';


export default function RecipePage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Cuisineasy </title>
            </Helmet>

            <Container maxWidth="x1">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Toutes les recettes
                </Typography>
                {/* <Stack direction="row" flexWrap="wrap-reverse" aligItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <ProductFilterSidebar
                    openFilter={openFilter}
                    onOpenFilter={handleOpenFilter}
                    onCloseFilter={handleCloseFilter}
                    />
                    <ProductSort />
                </Stack>
                </Stack> */}
                <RecipeList recipes={recipes} />

                {/* <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppCurrentVisits
                            title="Current Visits"
                            chartData={[
                                { label: 'America', value: 4344 },
                                { label: 'Asia', value: 5435 },
                                { label: 'Europe', value: 1443 },
                                { label: 'Africa', value: 4443 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]}
                            />
                    </Grid>
                </Grid> */}
            </Container>
        </>
    )
}