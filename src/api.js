import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

export const getDesks = async limit => API.graphql(graphqlOperation(queries.listDesks, { limit }));

export const subscribeToDesks = (func) => {
  API.graphql(graphqlOperation(subscriptions.onUpdateDesk)).subscribe({
    next: deskData => func(deskData),
  });
};
