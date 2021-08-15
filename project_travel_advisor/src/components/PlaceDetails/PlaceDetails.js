import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import Collapse from '@material-ui/core/Collapse';
// eslint-disable-next-line
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles.js';

const placeHolderPhoto = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

const mkPhotoUrl = (place) => {
  const photoRef = place.gmap?.photos[0].photo_reference;
  if (!photoRef) {
    return placeHolderPhoto;
  }
  return `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoRef}&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350`;
};

const mkDirectionsUrl = (address, coords) => `https://www.google.com/maps/dir/${coords.lat},${coords.lng}/${address}`;

const PlaceDetails = ({ place, selected, refProp, coords }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={mkPhotoUrl(place)}
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
        {place.deals.slice(0, 5).map((deal) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <Typography variant="subtitle2" color="textSecondary">${deal.price}, {deal.item}</Typography>
          </Box>
        ))}
        {place.deals.length > 5
          && (
            <>
              <CardActions disableSpacing>
                <Typography variant="subtitle2" color="textSecondary">+ {place.deals.length - 5} more!</Typography>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {place.deals.slice(5, place.deals.length + 1).map((deal) => (
                  <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <Typography variant="subtitle2" color="textSecondary">${deal.price}, {deal.item}</Typography>
                  </Box>
                ))}
              </Collapse>
            </>
          )}
        {place.gmap.types.map((type) => (
          <Chip key={type} size="small" label={type} className={classes.chip} />
        ))}
        {place.gmap.formatted_address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />
            <Button size="small" color="primary" onClick={() => window.open(mkDirectionsUrl(place.gmap.formatted_address, coords), '_blank')}>
              {place.gmap.formatted_address}
            </Button>
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
