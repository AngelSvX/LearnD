import { Words } from '@/assets/Exercises/ConcatWords';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

const ProgressPage = () => {
  // Estado para la pregunta actual y la frase construida
  const [currentWords, setCurrentWords] = useState(null);
  const [constructedPhrase, setConstructedPhrase] = useState([]);

  // Cargar palabras de forma aleatoria de la lista Words
  const loadNewQuestion = () => {
    const randomIndex = Math.floor(Math.random() * Words.length);
    const selectedWords = Words[randomIndex];
    setCurrentWords(selectedWords);
    setConstructedPhrase([]);
  };

  // Función para manejar la selección de palabras
  const handleWordSelection = (word) => {
    if (currentWords) {
      setConstructedPhrase([...constructedPhrase, word]);
    }
  };

  // Función para verificar si la frase es correcta
  const checkAnswer = () => {
    const phrase = constructedPhrase.join('');
    if (phrase === currentWords.correct) {
      Alert.alert("¡Correcto!", "La frase es correcta.");
    } else {
      Alert.alert("Intenta de nuevo", "La frase no es correcta.");
    }
  };

  // Función para reiniciar el juego
  const resetGame = () => {
    loadNewQuestion();
  };

  // Cargar la primera pregunta cuando el componente se monta
  React.useEffect(() => {
    loadNewQuestion();
  }, []);

  return (
    <View style={styles.container}>
      {currentWords && (
        <>
          <Text style={styles.instruction}>Pregunta: {currentWords.help}</Text>
          
          {/* Palabras disponibles para seleccionar */}
          <View style={styles.wordsContainer}>
            {Object.values(currentWords.word).map((word, index) => (
              <TouchableOpacity
                key={index}
                style={styles.wordButton}
                onPress={() => handleWordSelection(word)}
              >
                <Text style={styles.wordText}>{word}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Frase construida */}
          <View style={styles.phraseContainer}>
            {constructedPhrase.map((word, index) => (
              <Text key={index} style={styles.phraseWord}>{word}</Text>
            ))}
          </View>

          {/* Botones de acción */}
          <View style={styles.buttonContainer}>
            <Button title="Verificar" onPress={checkAnswer} />
            <Button title="Reiniciar" onPress={resetGame} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  instruction: { fontSize: 18, marginBottom: 20, color: "white" },
  wordsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20,},
  wordButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  wordText: { color: 'white' },
  phraseContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  phraseWord: { fontSize: 20, padding: 5, backgroundColor:"white" },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' }
});

export default ProgressPage;