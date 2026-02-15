'use client';

import React, { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MotionValue } from 'motion/react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		Object_2: THREE.Mesh;
		Object_3: THREE.Mesh;
	};
	materials: {
		Crystal: THREE.MeshStandardMaterial;
		Metal: THREE.MeshStandardMaterial;
	};
};

export interface EngagementRingProps extends React.ComponentProps<'group'> {
	rotationY?: MotionValue<number> | number; // radians, horizontal rotation around Y axis
}

export function EngagementRing({ rotationY, ...props }: EngagementRingProps) {
	const { nodes, materials } = useGLTF(
		'/models/diamond_engagement_ring.glb',
	) as unknown as GLTFResult;

	const groupRef = useRef<THREE.Group>(null);

	useFrame(() => {
		if (groupRef.current == null || rotationY == null) return;

		const rad = typeof rotationY === 'number' ? rotationY : rotationY.get();

		groupRef.current.rotation.y = rad;
	});

	return (
		<group ref={groupRef} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_2.geometry}
					material={materials.Crystal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_3.geometry}
					material={materials.Metal}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/models/diamond_engagement_ring.glb');
