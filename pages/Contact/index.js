import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  message: yup.string().required('Required'),
});

export default function Contact() {
  const formik = useFormik({
    initialValues: { email: '', message: '' },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        {...formik.getFieldProps('email')}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
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
      <Button type="submit">Submit</Button>
    </form>
  );
}