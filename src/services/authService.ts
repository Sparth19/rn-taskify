import client from './apolloClient';
import {SIGN_UP_MUTATION} from './graphql/mutations/mutations';

export const signUp = async (
  name: string,
  email: string,
  password: string,
  username: string,
) => {
  try {
    const {data} = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables: {input: {name, email, password, username}},
    });

    return data.signUp;
  } catch (error) {
    console.error('Error signing up:', JSON.stringify(error, null, 2));
  }
};
export const login = async (email: string, password: string) => {
  try {
    const {data} = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables: {input: {email, password}},
    });

    return data.signUp;
  } catch (error) {
    console.error('Error signing up:', JSON.stringify(error, null, 2));
  }
};
