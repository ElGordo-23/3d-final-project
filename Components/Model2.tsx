import { useGLTF } from '@react-three/drei';
import { GetServerSidePropsContext } from 'next';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { DreiGLTF } from '../util/types';

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    '/CFD_geometry_shells_result.gltf',
  ) as DreiGLTF;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Volume_0.geometry}
        material={materials.Volume_0}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/CFD_geometry_shells_result.gltf');

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { getUserBySessionToken } = await import('../util/database');

//   const sessionToken = context.req.cookies.sessionToken;

//   // Authorization: Allow only specific user
//   const sessionUser = await getUserBySessionToken(sessionToken);

//   if (!sessionUser) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: `/login?returnTo=${context.req.url}`,
//       },
//     };
//   }

//   if (sessionUser.id !== Number(context.query.userId)) {
//     return {
//       props: {
//         errors: [{ message: 'Not allowed' }],
//       },
//     };
//   }
// }
