import {Box, FormFieldGroup, Button} from "@stripe/ui-extension-sdk/ui";

function MyForm({onSubmit}) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {values} = event.target;
        const formData = {
            month: values.month.value,
            year: values.year.value
        };
        onSubmit(formData);
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormFieldGroup
                fields={[
                {
                    label: 'Expiration Month',
                    name: 'month',
                    type: 'expirationMonth',
                },
                {
                    label: 'Expiration Year',
                    name: 'year',
                    type: 'expirationYear',
                },
            ]}
            />
            <Button type="primary">Submit</Button>
        </form>
    );
}
export default MyForm