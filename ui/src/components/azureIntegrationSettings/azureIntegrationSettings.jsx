import { BtsAuthFieldsInfo } from 'components/btsAuthFieldsInfo';
import {
  URL_ATTRIBUTE_KEY,
  PROJECT_ATTRIBUTE_KEY,
  USERNAME_ATTRIBUTE_KEY,
  CHECKBOX_ATTRIBUTE_KEY,
} from 'components/constants';
import { AzureIntegrationFormFields } from '../azureIntegrationFormFields';

export const AzureIntegrationSettings = (props) => {
  const { data, goToPreviousPage, onUpdate, isGlobal, ...extensionProps } = props;
  const {
    lib: { React },
    components: { IntegrationSettings: IntegrationSettingsContainer },
  } = extensionProps;

  const authFieldsConfig = [
    {
      value: data.integrationParameters[URL_ATTRIBUTE_KEY],
      message: 'Link to BTS',
    },
    {
      value: data.integrationParameters[PROJECT_ATTRIBUTE_KEY],
      message: 'Project Name',
    },

    data.integrationParameters[USERNAME_ATTRIBUTE_KEY]
      ? {
          value: data.integrationParameters[USERNAME_ATTRIBUTE_KEY],
          message: 'Authorized by',
        }
      : {
          value: data.integrationParameters[CHECKBOX_ATTRIBUTE_KEY] ? 'Yes' : 'No',
          message: 'Allow users to post issues using this Token',
        },
  ];

  const getEditAuthConfig = () => ({
    content: <BtsAuthFieldsInfo fieldsConfig={authFieldsConfig} />,
  });

  return (
    <IntegrationSettingsContainer
      data={data}
      onUpdate={onUpdate}
      goToPreviousPage={goToPreviousPage}
      editAuthConfig={getEditAuthConfig()}
      isGlobal={isGlobal}
      formFieldsComponent={(rest) => <AzureIntegrationFormFields {...extensionProps} {...rest} />}
    />
  );
};
