import { GLTF } from 'three-stdlib';

export type Errors = {
  message: string;
}[];

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};
