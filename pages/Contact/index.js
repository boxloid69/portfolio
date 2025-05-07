import { TextField, Button, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Validation schema using Yup
const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  message: yup.string().required('Required'),
});

export default function Contact() {
  const formik = useFormik({
    initialValues: { email: '', message: '' },
    validationSchema,
    onSubmit: (values) => {
      // Print form values to the console (simulate sending the message)
      console.log('Form Submitted:', values);
      // Reset the form after submission
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          multiline
          rows={4}
          fullWidth
          id="message"
          name="message"
          label="Message"
          {...formik.getFieldProps('message')}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      {/* Optional: Display a success message after submission */}
      {formik.isSubmitting && (
        <Typography sx={{ mt: 2, color: 'green' }}>Message Sent!</Typography>
      )}
    </form>
  );
}
