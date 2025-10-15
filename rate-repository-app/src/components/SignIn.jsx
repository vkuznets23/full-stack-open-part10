import { View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Formik } from 'formik'
import Text from './Text'
import { theme } from '../theme'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  formContainer: {
    marginTop: theme.spacing.lg,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  errorText: {
    color: '#d73a4a',
    fontSize: theme.fontSizes.body,
    marginTop: theme.spacing.xs,
  },
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                fontWeight="bold"
                fontSize="subheading"
              >
                Username
              </Text>
              <TextInput
                style={[
                  styles.input,
                  touched.username &&
                    errors.username && {
                      borderColor: '#d73a4a',
                      borderWidth: 1,
                    },
                ]}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Username"
                autoCapitalize="none"
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text
                style={styles.label}
                fontWeight="bold"
                fontSize="subheading"
              >
                Password
              </Text>
              <TextInput
                style={[
                  styles.input,
                  touched.password &&
                    errors.password && {
                      borderColor: '#d73a4a',
                      borderWidth: 1,
                    },
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default SignIn
