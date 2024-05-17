import React from 'react';
import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import useTranslation from 'shared/hooks/use-translation';
import './allot-table.scss';
import { getPersonsCount, getTotalTableCount } from '../utils/get-count';
import useAllotTableHook from '../hooks/use-allot-table-hook';

const AllotTable = () => {
  const t = useTranslation();

  const {
    tableNumber,
    totalPerson,
    customerName,
    tableNumberChangeHandler,
    totalPersonChangeHandler,
    customerNameChangeHandler,
    submitHandler,
  } = useAllotTableHook();

  return (
    <Box className="allot-table-container">
      <Typography variant="h4">{t('ALLOT_TABLE')}</Typography>

      <Box className="allot-table-box">
        <Card className="allot-table-card">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                {/* Table Number */}
                <FormControl fullWidth required error={tableNumber.hasError}>
                  <InputLabel>{t('TABLE_NUM')}</InputLabel>
                  <Select
                    id="tableNumber"
                    value={tableNumber.value}
                    label={t('TABLE_NUM')}
                    onChange={tableNumberChangeHandler}
                  >
                    <MenuItem value="">{t('NONE')}</MenuItem>
                    {getTotalTableCount().map((count) => {
                      return (
                        <MenuItem value={count} key={count}>
                          {count}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {tableNumber.hasError && <FormHelperText>{tableNumber.message}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                {/* Number of people */}
                <FormControl fullWidth>
                  <InputLabel>{t('PERSONS')}</InputLabel>
                  <Select id="persons" value={totalPerson} label={t('PERSONS')} onChange={totalPersonChangeHandler}>
                    {getPersonsCount().map((personCount) => {
                      return (
                        <MenuItem value={personCount} key={personCount}>
                          {personCount}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                {/* Name */}
                <FormControl fullWidth>
                  <TextField
                    id="name"
                    name="name"
                    label={t('NAME')}
                    value={customerName.value}
                    required
                    onChange={customerNameChangeHandler}
                    error={customerName.hasError}
                    helperText={customerName.hasError ? customerName.message : ''}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box className="btn-container">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={submitHandler}
                data-testid="allot-table-btn"
              >
                {t('ALLOT_TABLE')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AllotTable;
