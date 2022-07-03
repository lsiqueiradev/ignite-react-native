import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SkillProps extends TouchableOpacityProps {
  onPress: () => void;
  skill: string;
}


export function SkillCard({ skill, onPress, ...rest }: SkillProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.6}
      {...rest}
      onPress={onPress}
    >
      <Text
        style={styles.buttonTextskill}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTextskill: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});