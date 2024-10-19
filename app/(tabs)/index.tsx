import { StyleSheet, View } from "react-native";

import { Canvas } from "@react-three/fiber/native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={"hotpink"} />
        </mesh>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
