import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  CssVarsProvider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Option,
  Stack,
  Textarea,
  Typography,
  //useTheme
} from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadIcon from '@mui/icons-material/Upload';
import NavBar from '../dashboard/components/NavBar';

// Define the form data type
type ListingFormData = {
  propertyTitle: string;
  state: string;
  address: string;
  description: string;
  water: boolean;
  wifi: boolean;
  power: boolean;
  rentType: 'yearly' | 'shortlet';
  rentPrice: string;
  agencyPrice: string;
  images: FileList | null;
  video: File | null;
};

// Define the validation schema
const schema = yup.object({
  propertyTitle: yup.string().required('Property title is required'),
  state: yup.string().required('State is required'),
  address: yup.string().required('Address is required'),
  description: yup.string().required('Property description is required'),
  rentPrice: yup.number().positive('Rent price must be positive').required('Rent price is required'),
  agencyPrice: yup.number().positive('Agency price must be positive').required('Agency price is required'),
}).required();



const ListingPage: React.FC = () => {
  //const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { handleSubmit, control, formState: { errors } } = useForm<ListingFormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      propertyTitle: '',
      state: '',
      address: '',
      description: '',
      water: false,
      wifi: false,
      power: false,
      rentType: 'yearly',
      rentPrice: '',
      agencyPrice: '',
      images: null,
      video: null,
    },
  });

  const onSubmit = async (data: ListingFormData) => {
    setIsSubmitting(true);
    try {
      // Submit data to your API
      console.log(data);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CssVarsProvider >
      <CssBaseline />
      <NavBar />
      <Box sx={{ maxWidth: 800, margin: 'auto', p: 3 }}>
        <Typography level="h2" sx={{ mb: 2 }}>
          List Your Property
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Property Title */}
            <Grid xs={12}>
              <Controller
                name="propertyTitle"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.propertyTitle}>
                    <FormLabel>Property Title</FormLabel>
                    <Input {...field} placeholder="Enter property title" />
                    {errors.propertyTitle && (
                      <Typography level="body-xs" color="danger">
                        {errors.propertyTitle.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* State Selector */}
            <Grid xs={12} sm={6}>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.state}>
                    <FormLabel>State</FormLabel>
                    <Select {...field} placeholder="Select State">
                      <Option value="Lagos">Lagos</Option>
                      <Option value="Abuja">Abuja</Option>
                      <Option value="Oyo">Oyo</Option>
                    </Select>
                    {errors.state && (
                      <Typography level="body-xs" color="danger">
                        {errors.state.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* Address */}
            <Grid xs={12} sm={6}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.address}>
                    <FormLabel>Full Address</FormLabel>
                    <Input {...field} placeholder="Enter full address" />
                    {errors.address && (
                      <Typography level="body-xs" color="danger">
                        {errors.address.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* Property Description */}
            <Grid xs={12}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.description}>
                    <FormLabel>Property Description</FormLabel>
                    <Textarea
                      {...field}
                      minRows={3}
                      placeholder="Describe your property"
                    />
                    {errors.description && (
                      <Typography level="body-xs" color="danger">
                        {errors.description.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* Amenities */}
            <Grid xs={12}>
              <Typography level="body-sm">Amenities</Typography>
              <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                <Controller
                  name="water"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      label="Water Available"
                    />
                  )}
                />
                <Controller
                  name="wifi"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      label="WiFi Available"
                    />
                  )}
                />
                <Controller
                  name="power"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      label="24-Hour Power"
                    />
                  )}
                />
              </Stack>
            </Grid>

            {/* Rent Type */}
            <Grid xs={12} sm={4}>
              <Controller
                name="rentType"
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <FormLabel>Rent Type</FormLabel>
                    <Select {...field} placeholder="Select Rent Type">
                      <Option value="yearly">Yearly Rent</Option>
                      <Option value="shortlet">Shortlet</Option>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>

            {/* Rent Price */}
            <Grid xs={12} sm={4}>
              <Controller
                name="rentPrice"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.rentPrice}>
                    <FormLabel>Rent Price (₦)</FormLabel>
                    <Input {...field} type="number" placeholder="Enter rent price" />
                    {errors.rentPrice && (
                      <Typography level="body-xs" color="danger">
                        {errors.rentPrice.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* Agency Price */}
            <Grid xs={12} sm={4}>
              <Controller
                name="agencyPrice"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors.agencyPrice}>
                    <FormLabel>Agency Price (₦)</FormLabel>
                    <Input {...field} type="number" placeholder="Enter agency price" />
                    {errors.agencyPrice && (
                      <Typography level="body-xs" color="danger">
                        {errors.agencyPrice.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* File Input for Images */}
            <Grid xs={12} sm={6}>
              <Controller
                name="images"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Button
                      component="label"
                      startDecorator={<PhotoCamera />}
                      fullWidth
                    >
                      Upload Images
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </Button>
                    {field.value && (
                      <Typography level="body-sm" mt={1}>
                        {(field.value as FileList).length} file(s) selected
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Grid>

            {/* File Input for Video */}
            <Grid xs={12} sm={6}>
              <Controller
                name="video"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Button
                      component="label"
                      startDecorator={<UploadIcon />}
                      fullWidth
                    >
                      Upload Video
                      <input
                        hidden
                        accept="video/*"
                        type="file"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </Button>
                    {field.value && (
                      <Typography level="body-sm" mt={1}>
                        {(field.value as File).name}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Grid>

            {/* Submit Button */}
            <Grid xs={12}>
              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                loadingPosition="start"
                variant="solid"
                sx={{ mt: 2 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Listing'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </CssVarsProvider>
  );
};

export default ListingPage;