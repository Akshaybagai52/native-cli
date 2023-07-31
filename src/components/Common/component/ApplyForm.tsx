import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const ApplyForm = ({ onClose, selectedValue }: any) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [applyFor, setApplyFor] = React.useState(selectedValue);
  const [cvFile, setCVFile] = React.useState<any>(null);
  const pickerArr = [{ label: "Please choose an option", value: "" }, { label: "Web designer", value: "1" }, { label: "Front End Developer", value: "2" }, { label: "Wordpress Developer", value: "3" }, { label: "Graphic Designer", value: "4" }, { label: "Shopify", value: "5" }, { label: "Php Developer", value: "6" }]

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('attachment', {
      uri: cvFile[0]?.uri,
      name: cvFile[0]?.name,
      type: cvFile[0]?.type,
    });

    // Make a POST request to send the form data to the backend
    axios({
      url: 'https://baseline-backend1.onrender.com/cv-section',
      method: 'POST',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response: { data: any }) => {
        // Handle the response from the backend (if needed)
        console.log('Form data sent successfully:', response.data);
        onClose();
      })
      .catch((error: any) => {
        console.error('Error sending form data:', error);
      });
  };

  const handleCVUpload = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('Selected file:', result);
      setCVFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the file picker
        console.log('File picker cancelled.');
      } else {
        console.log('Error selecting file:', err);
      }
    }
  };

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.title}>Apply for a Position</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={applyFor}
            style={styles.picker}
            onValueChange={(itemValue: any) => setApplyFor(itemValue)}>
            {pickerArr?.map((item: any, index: number) => (
              <Picker.Item
                key={index}
                label={item?.label}
                value={item?.value}
              />
            ))}

            {/* Add more options as needed */}
          </Picker>
        </View >

        {
          Platform.OS === 'ios' || Platform.OS === 'android' ? (
            <TouchableOpacity style={styles.cvUpload} onPress={handleCVUpload}>
              <Text style={styles.cvUploadText}>
                {cvFile ? `File Selected: ${cvFile[0]?.name}` : 'Upload Your CV'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Upload Your CV"
              value={cvFile ? cvFile.name : ''}
              editable={false}
            />
          )
        }
        < TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  parent: {
    width: "100%",
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    marginBottom: 15,
  },
  picker: {
    height: 40,
  },
  cvUpload: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cvUploadText: {
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#bb372a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ApplyForm;
