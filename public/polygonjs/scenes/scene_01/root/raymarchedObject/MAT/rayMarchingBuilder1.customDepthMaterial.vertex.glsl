precision highp float;
precision highp int;

varying vec3 vPw;

#include <common>



// /raymarchedObject/MAT/rayMarchingBuilder1/globals1
uniform float time;





void main()	{

	vPw = (modelMatrix * vec4( position, 1.0 )).xyz;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}