import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function LoginFormAluno() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View
      style={{
        height: 350,
        width: 250,
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Insira seu nome"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Insira seu sobrenome"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Insira sua turma"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        )}
        name="lastName"
      />

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
