// components/Header.tsx
import { Text } from '@mantine/core';

export default function Header() {
  return (
    <div style={{ 
      backgroundColor: '#D1EAF0', 
      padding: '1rem',
      width: '100%',
      textAlign: 'center'
    }}>
      <Text c="white" fw={700} size="xl">
        Weather App
      </Text>
    </div>
  );
}