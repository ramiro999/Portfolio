import React from "react";
import { useForm, Resolver } from "react-hook-form" 

type FormValues = {
    firstName: string;
    lastName: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.firstName ? values: {},
        errors: !values.firstName
        ? {
            firstName: {
                type: "required",
                message: "This is required.",
            },
        } : {},
    }
}

const ContactSection: React.FC = () => {

    const { register, handleSubmit, formState:{errors}, } = useForm<FormValues>({ resolver })
    const onSubmit = handleSubmit( (data) => console.log(data) )

    return(
        <>
        <form onSubmit={onSubmit}>
            <input {...register("firstName")} placeholder="Ramiro" />
            {errors?.firstName && <p>{errors.firstName.message}</p>}

            <input {...register("lastName")} placeholder="Avila" />
            <input type="submit" />
        </form>
        </>
    );
};

export default ContactSection;