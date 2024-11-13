/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} label={label} required={required} fullWidth />
        )}
      />
    </Grid>
  );
};
export default FormInput;
