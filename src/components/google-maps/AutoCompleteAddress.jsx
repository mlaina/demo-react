import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import React, { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import theme from '../../config/theme/theme';
import loadingImg from '../../../public/animations/loading.svg';
import RoomIcon from '@mui/icons-material/Room';
import { withTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';

const { COUNTRY } = process.env;

const AutoCompleteAddress = ({
  t,
  disabled,
  setValue,
  required,
  canCheck,
  value = '',
  cpBelow = false,
}) => {
  const [address, setAddress] = React.useState('');
  const [cp, setCp] = React.useState(null);
  const [check, setCheck] = React.useState(false);
  const [number, setNumber] = React.useState(false);
  const [nocountry, setNocountry] = React.useState(false);

  const handleSelect = async (value) => {
    setNumber(!value.match(/\d{1,}/));
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(results);
    if (results.length > 0) {
      setAddress(results[0].formatted_address);
      const [place] = await geocodeByPlaceId(results[0].place_id);
      const { long_name: postalCode = '' } =
        place.address_components.find((c) => c.types.includes('postal_code')) ||
        {};
      setCp(postalCode);
      setCheck(true);
      let address = results[0].address_components
        ? results[0].address_components
        : [];

      let locality = address.find((a) =>
        a.types ? a.types[0] === 'locality' : false
      )
        ? address.find((a) => (a.types ? a.types[0] === 'locality' : false))
            .long_name
        : '';
      let province = address.find((a) =>
        a.types ? a.types[0] === 'administrative_area_level_2' : false
      )
        ? address.find((a) =>
            a.types ? a.types[0] === 'administrative_area_level_2' : false
          ).long_name
        : '';
      let country = address.find((a) =>
        a.types ? a.types[0] === 'country' : false
      )
        ? address.find((a) => (a.types ? a.types[0] === 'country' : false))
            .short_name
        : '';
      let number = address.find((a) =>
        a.types ? a.types[0] === 'street_number' : false
      )
        ? address.find((a) =>
            a.types ? a.types[0] === 'street_number' : false
          ).long_name
        : null;

      if (country === COUNTRY) {
        setNocountry(false);
        setValue({
          street: value,
          latitude: latLng.lat,
          longitude: latLng.lng,
          postalcode: postalCode,
          googleplaceid: results[0].place_id,
          locality: locality,
          municipality: locality,
          province: province,
          number,
        });
      } else {
        setNocountry(true);
      }
    }
    focus();
  };

  const focus = () => {
    let field = document.createElement('input');
    field.setAttribute('type', 'text');
    document.body.appendChild(field);

    setTimeout(function () {
      field.focus();
      setTimeout(function () {
        field.setAttribute('style', 'display:none;');
      }, 50);
    }, 50);
  };

  useEffect(() => {
    setCheck(false);
    setValue(null);
  }, [address]);

  return (
    <PlacesAutocomplete
      fields={['ALL']}
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Grid container spacing={2}>
          <Grid item md={cpBelow ? 12 : 10} xs={12}>
            <TextField
              style={{
                pointerEvents: disabled ? 'none' : 'auto',
              }}
              value={value}
              multiline
              maxRows={4}
              required={required}
              color={'secondary'}
              fullWidth
              label={'Introduzca dirección'}
              {...getInputProps()}
            />
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active
                  ? theme.ok.color
                  : theme.grey.color,
                marginBottom: '1px',
              };
              return (
                <MenuItem
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                >
                  <Typography variant="inherit" noWrap>
                    {suggestion.description}
                  </Typography>
                </MenuItem>
              );
            })}
          </Grid>
          <Grid
            item
            md={cpBelow ? 12 : 2}
            xs={12}
            style={{ marginTop: cpBelow && '1rem' }}
          >
            <Typography align={'center'} color={'primary'}>
              {t('WIZARD.CP')}
            </Typography>
            <Typography align={'center'} variant={'h5'} color={'primary'}>
              <b>{cp}</b>
            </Typography>
          </Grid>
          {check && !canCheck ? (
            <Grid item xs={12}>
              <Typography align={'center'}>
                <RoomIcon
                  fontSize={'large'}
                  style={{ color: theme.ok.color }}
                />
              </Typography>
            </Grid>
          ) : (
            <Grid item md={12}>
              {loading && (
                <img
                  src={loadingImg}
                  style={{
                    maxWidth: '10rem',
                    width: '30%',
                    display: 'block',
                    margin: 'auto',
                  }}
                />
              )}
            </Grid>
          )}
          {number && (
            <Grid item xs={12}>
              <Alert severity="warning">{t('ADDRESS.NUMBER')}</Alert>
            </Grid>
          )}
          {nocountry && (
            <Grid item xs={12}>
              <Alert severity="error">{t('ADDRESS.NOCOUNTRY')} </Alert>
            </Grid>
          )}
          {!cp && address && address !== '' && (
            <Grid item xs={12}>
              <Alert severity="error">{t('PROVISIONALS.ALERT.CP')}</Alert>
            </Grid>
          )}
        </Grid>
      )}
    </PlacesAutocomplete>
  );
};

export default withTranslation()(AutoCompleteAddress);
