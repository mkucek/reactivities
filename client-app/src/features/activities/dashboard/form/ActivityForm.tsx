import React, { useState, useEffect } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Formik, Form, } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../../app/common/form/MyTextInput";
import MyTextArea from "../../../../app/common/form/MyTextArea";
import { categoryOptions } from "../../../../app/common/form/options/categoryOptions";
import MySelectInput from "../../../../app/common/form/MySelectInput";
import MyDateInput from "../../../../app/common/form/MyDateInput";
import { ActivityFormValues } from "../../../../app/models/activity";


export default observer(function ActivityForm(){
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loadActivity} = activityStore;
    const{id} = useParams();
    const navigate = useNavigate();

    const[activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required('Date is required').nullable(),
        venue: Yup.string().required(),
        city: Yup.string().required()

    });

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)));
    }, [id, loadActivity]);

    function handleFormSubmit(activity: ActivityFormValues){
        if(!activity.id){
            const newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => navigate(`/activities/${activity.id}`))
        }else{
            updateActivity(newActivity).then(() => navigate(`/activities/${activity.id}`))
        }
    }



    return(
        <Segment clearing>
            <Header content='Activity Details' sub color='teal'/>
            <Formik validationSchema={validationSchema}
                    enableReinitialize 
                    initialValues={activity} 
                    onSubmit={values => handleFormSubmit(values)}>
                {({handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='title' placeholder='Title' />
                    <MyTextArea rows={3} placeholder='Description' name='description' />
                    <MySelectInput options={categoryOptions} placeholder='Category'  name='category' />
                    <MyDateInput placeholderText='Date' 
                                name='date' 
                                showTimeSelect 
                                timeCaption='time' 
                                dateFormat='MMMM d, yyyy h:mm aa'/>   
                    <Header content='Location Details' sub color='teal'/> 
                    <MyTextInput placeholder='City' name='city' />
                    <MyTextInput placeholder='Venue' name='venue' />
                    <Button disabled={isSubmitting || !dirty || !isValid} loading={isSubmitting} floated='right' positive type='submit' content='Submit'/>
                    <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
                </Form>
                )}
            </Formik>
        
        </Segment>
    )
})