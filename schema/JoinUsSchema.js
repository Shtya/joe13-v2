
import * as yup from 'yup'


export const SchemaJoinUs = yup.object({
  name: yup.string().required("errors.fullName"),
  phone: yup.string().required("errors.phone"),
  email: yup.string().email("errors.invalidEmail").required("errors.email"),
  city: yup.string().required("errors.city"),
  major: yup.string().required("errors.major"),
  currentJopTitle: yup.string().required("errors.currentJopTitle"),
  CV: yup.string().required("errors.CV"),
})