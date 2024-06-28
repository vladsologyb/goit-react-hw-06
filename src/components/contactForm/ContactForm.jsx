import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { add } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from "react-redux";
import css from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("it is required")
})

export default function ContactForm() {
        const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        if (!name || !number) {
            alert('You need to fill each field');
            return;
        }

        const newContact = {
            name,
            number,
        };

        dispatch(add(newContact));

        resetForm();
    }


    return <Formik initialValues={{
        name: "",
        number: "",
       

    }}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
            <p className={css.text}>Name</p>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
            <p className={css.text}>Number</p>
            <Field className={css.field} name="number" type="number" />
            <ErrorMessage name="number" component="span" />
            <button className={css.btn} type="submit">Add Contacts</button>
        </Form>
    </Formik>
}
