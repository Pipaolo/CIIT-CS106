import React from "react";
import { Text, View } from "react-native";
import { Appbar, Card, Headline, Title } from "react-native-paper";
import tw from "twrnc";

const HomePage = () => {
  return (
    <View style={tw`p-4 flex flex-col `}>
      <Headline style={tw`font-bold`}>My thoughts about CIIT.</Headline>
      <Card style={tw`mt-4`}>
        <Card.Title title="Friendly Community" />
        <Card.Content>
          <Text>
            You always have someone to communicate and make friends with.
          </Text>
        </Card.Content>
      </Card>
      <Card style={tw`mt-4`}>
        <Card.Title title="Student First" />
        <Card.Content>
          <Text>They highly value the opinions of their students.</Text>
        </Card.Content>
      </Card>
      <Card style={tw`mt-4`}>
        <Card.Title title="Software Benefits" />
        <Card.Content>
          <Text>
            Even though the applications that I am using is still part of my
            tuition. It's still good for the school to avail different creative
            applications for their students to use.
          </Text>
        </Card.Content>
      </Card>
      <Card style={tw`mt-4`}>
        <Card.Title title="Mental Health Advocate" />
        <Card.Content>
          <Text>
            The GCC is very open and able to produce different articles on how
            to keep one's mental health healthy.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomePage;
