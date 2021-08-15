import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.gmap.photos.length > 0 ? place.gmap.photos[0].photo_reference : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.gmap.rating)} readOnly />
          <Typography component="legend">{place.gmap.user_ratings_total} review{place.gmap.user_ratings_total > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {place.gmap.price_level !== undefined
            && (
              <>
                <Typography component="legend">Price</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {'$'.repeat(place.gmap.price_level + 1)}
                </Typography>
              </>
            )}
        </Box>
        {/* <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Address</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.formatted_address}
          </Typography>
        </Box> */}
        {place?.deals?.map((deal) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            {/* <img src={award.images.small} /> */}
            <Typography variant="subtitle2" color="textSecondary">${deal.price}, {deal.item}</Typography>
          </Box>
        ))}
        {place.gmap.types.map((type) => (
          <Chip key={type} size="small" label={type} className={classes.chip} />
        ))}
        {place.gmap.formatted_address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.gmap.formatted_address}
          </Typography>
        )}
        {place.gmap.formatted_phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.gmap.formatted_phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button> */}
        <Button size="small" color="primary" onClick={() => window.open(place.gmap.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
