import { useEffect, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

interface SkillDataProps {
  id: string;
  name: string;
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDataProps[]>([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }

  }, [])

  function handleAddSkill() {
    setIsLoading(true);
    if (newSkill === '') {
      return;
    }
    setTimeout(() => {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill,
      }
      setMySkills(oldState => [...oldState, data]);
      setNewSkill('');
      setIsLoading(false);
    }, 1000);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Welcome, Lucas
      </Text>

      <Text
        style={styles.greeting}
      >
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#888888"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button
        onPress={handleAddSkill}
        isLoading={isLoading}
      />

      <Text
        style={[styles.title, { marginVertical: 50, }]}
      >
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 5,
    marginTop: 30,
  },
  greeting: {
    color: "#FFFFFF",
  }
});