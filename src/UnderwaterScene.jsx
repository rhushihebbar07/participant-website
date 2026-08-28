import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function UnderwaterScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // =====================================================
    // SCENE
    // =====================================================

    const scene = new THREE.Scene()

    scene.fog = new THREE.FogExp2(
      0x021827,
      0.018
    )

    // =====================================================
    // CAMERA
    // =====================================================

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      150
    )

    camera.position.set(0, 1.2, 12)

    // =====================================================
    // RENDERER
    // =====================================================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    )

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )

    renderer.outputColorSpace =
      THREE.SRGBColorSpace

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping

    renderer.toneMappingExposure = 1.25

    mount.appendChild(renderer.domElement)

    // =====================================================
    // COLORS
    // =====================================================

    const deepBlue = new THREE.Color(
      0x010b18
    )

    const oceanBlue = new THREE.Color(
      0x02314b
    )

    const cyan = new THREE.Color(
      0x35dfff
    )

    // =====================================================
    // LIGHTING
    // =====================================================

    const ambient =
      new THREE.HemisphereLight(
        0x158eb8,
        0x01050c,
        1.5
      )

    scene.add(ambient)

    const surfaceLight =
      new THREE.PointLight(
        0x8eefff,
        22,
        45,
        1.8
      )

    surfaceLight.position.set(
      0,
      9,
      2
    )

    scene.add(surfaceLight)

    const sideLight =
      new THREE.PointLight(
        0x087da8,
        7,
        35
      )

    sideLight.position.set(
      -9,
      1,
      1
    )

    scene.add(sideLight)

    // =====================================================
    // FULLSCREEN UNDERWATER ATMOSPHERE
    // =====================================================

    const backgroundGeometry =
      new THREE.PlaneGeometry(
        2,
        2
      )

    const backgroundMaterial =
      new THREE.ShaderMaterial({

        depthWrite: false,
        depthTest: false,

        uniforms: {
          uTime: {
            value: 0
          },

          uResolution: {
            value: new THREE.Vector2(
              window.innerWidth,
              window.innerHeight
            )
          },

          uMouse: {
            value: new THREE.Vector2(0, 0)
          }
        },

        vertexShader: `
          varying vec2 vUv;

          void main() {

            vUv = uv;

            gl_Position =
              vec4(
                position.xy,
                1.0,
                1.0
              );
          }
        `,

        fragmentShader: `
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;

          varying vec2 vUv;

          // ------------------------------------------------
          // Smooth noise
          // ------------------------------------------------

          float hash(vec2 p) {

            p = fract(
              p * vec2(
                123.34,
                456.21
              )
            );

            p += dot(
              p,
              p + 45.32
            );

            return fract(
              p.x * p.y
            );
          }

          float noise(vec2 p) {

            vec2 i = floor(p);
            vec2 f = fract(p);

            f = f * f *
              (3.0 - 2.0 * f);

            return mix(
              mix(
                hash(i),
                hash(i + vec2(1.0, 0.0)),
                f.x
              ),
              mix(
                hash(i + vec2(0.0, 1.0)),
                hash(i + vec2(1.0, 1.0)),
                f.x
              ),
              f.y
            );
          }

          // ------------------------------------------------
          // Fractal noise
          // ------------------------------------------------

          float fbm(vec2 p) {

            float value = 0.0;
            float amplitude = 0.5;

            for(int i = 0; i < 5; i++) {

              value +=
                noise(p) *
                amplitude;

              p *= 2.0;

              amplitude *= 0.5;
            }

            return value;
          }

          // ------------------------------------------------
          // Water caustics
          // ------------------------------------------------

          float caustics(vec2 uv) {

            float t =
              uTime * 0.18;

            float n1 =
              sin(
                uv.x * 18.0 +
                sin(uv.y * 9.0 + t) * 3.0 +
                t
              );

            float n2 =
              sin(
                uv.y * 23.0 +
                sin(uv.x * 12.0 - t) * 2.0 -
                t * 1.3
              );

            float n3 =
              sin(
                (uv.x + uv.y) * 31.0 +
                t * 1.7
              );

            float pattern =
              n1 * n2 * n3;

            pattern =
              smoothstep(
                0.35,
                0.95,
                pattern
              );

            return pattern;
          }

          // ------------------------------------------------
          // Volumetric sunlight
          // ------------------------------------------------

          float lightRay(
            vec2 uv,
            vec2 origin,
            float angle,
            float width
          ) {

            vec2 direction =
              vec2(
                sin(angle),
                -cos(angle)
              );

            vec2 relative =
              uv - origin;

            float distanceFromRay =
              abs(
                dot(
                  relative,
                  vec2(
                    -direction.y,
                    direction.x
                  )
                )
              );

            float alongRay =
              dot(
                relative,
                direction
              );

            float ray =
              exp(
                -distanceFromRay *
                distanceFromRay /
                width
              );

            ray *=
              smoothstep(
                -0.2,
                0.7,
                alongRay
              );

            return ray;
          }

          void main() {

            vec2 uv =
              gl_FragCoord.xy /
              uResolution.xy;

            float aspect =
              uResolution.x /
              uResolution.y;

            vec2 centered =
              uv - 0.5;

            centered.x *= aspect;

            // ------------------------------------------------
            // Deep ocean gradient
            // ------------------------------------------------

            float depth =
              smoothstep(
                0.0,
                1.0,
                uv.y
              );

            vec3 topColor =
              vec3(
                0.005,
                0.10,
                0.15
              );

            vec3 middleColor =
              vec3(
                0.005,
                0.055,
                0.095
              );

            vec3 bottomColor =
              vec3(
                0.002,
                0.018,
                0.035
              );

            vec3 color =
              mix(
                bottomColor,
                middleColor,
                uv.y
              );

            color =
              mix(
                color,
                topColor,
                pow(uv.y, 2.5)
              );

            // ------------------------------------------------
            // Water surface glow
            // ------------------------------------------------

            float surface =
              exp(
                -pow(
                  (uv.y - 0.98) * 8.0,
                  2.0
                )
              );

            float surfaceNoise =
              fbm(
                vec2(
                  uv.x * 4.0 +
                  uTime * 0.025,
                  uv.y * 8.0
                )
              );

            surface *=
              0.55 +
              surfaceNoise * 0.9;

            color +=
              vec3(
                0.02,
                0.28,
                0.42
              ) *
              surface;

            // ------------------------------------------------
            // Central sunlight
            // ------------------------------------------------

            float sunGlow =
              exp(
                -length(
                  vec2(
                    centered.x * 0.65,
                    (uv.y - 0.94) * 2.0
                  )
                ) * 5.0
              );

            color +=
              vec3(
                0.04,
                0.34,
                0.48
              ) *
              sunGlow;

            // ------------------------------------------------
            // Light shafts
            // ------------------------------------------------

            vec2 rayOrigin =
              vec2(
                0.5 +
                uMouse.x * 0.035,
                1.02
              );

            float rays = 0.0;

            rays +=
              lightRay(
                uv,
                rayOrigin,
                -0.18,
                0.0025
              ) * 1.4;

            rays +=
              lightRay(
                uv,
                rayOrigin,
                -0.08,
                0.004
              ) * 0.9;

            rays +=
              lightRay(
                uv,
                rayOrigin,
                0.08,
                0.003
              ) * 1.15;

            rays +=
              lightRay(
                uv,
                rayOrigin,
                0.18,
                0.006
              ) * 0.6;

            rays +=
              lightRay(
                uv,
                rayOrigin,
                0.30,
                0.008
              ) * 0.35;

            float rayFade =
              pow(
                uv.y,
                1.35
              );

            rays *=
              rayFade;

            color +=
              vec3(
                0.02,
                0.25,
                0.36
              ) *
              rays;

            // ------------------------------------------------
            // Moving caustic field
            // ------------------------------------------------

            vec2 causticUv =
              vec2(
                uv.x * 2.3 +
                uMouse.x * 0.05,
                uv.y * 3.8
              );

            float c =
              caustics(
                causticUv
              );

            float causticFade =
              smoothstep(
                0.28,
                0.9,
                uv.y
              );

            c *=
              causticFade;

            color +=
              vec3(
                0.01,
                0.17,
                0.24
              ) *
              c;

            // ------------------------------------------------
            // Underwater haze
            // ------------------------------------------------

            float haze =
              fbm(
                uv * 2.8 +
                uTime * 0.008
              );

            haze *=
              smoothstep(
                0.1,
                0.85,
                uv.y
              );

            color +=
              vec3(
                0.0,
                0.035,
                0.055
              ) *
              haze;

            // ------------------------------------------------
            // Vignette
            // ------------------------------------------------

            float vignette =
              1.0 -
              smoothstep(
                0.25,
                0.9,
                length(centered)
              );

            color *=
              0.72 +
              vignette * 0.28;

            // ------------------------------------------------
            // Surface highlights
            // ------------------------------------------------

            float shimmer =
              sin(
                uv.x * 70.0 +
                uTime * 0.55
              ) *
              0.5 +
              0.5;

            shimmer *=
              sin(
                uv.x * 19.0 -
                uTime * 0.31
              ) *
              0.5 +
              0.5;

            shimmer *=
              smoothstep(
                0.82,
                1.0,
                uv.y
              );

            color +=
              vec3(
                0.06,
                0.35,
                0.46
              ) *
              shimmer *
              0.5;

            gl_FragColor =
              vec4(
                color,
                1.0
              );
          }
        `
      })

    const background =
      new THREE.Mesh(
        backgroundGeometry,
        backgroundMaterial
      )

    background.frustumCulled = false

    scene.add(background)

    // =====================================================
    // LIGHT VOLUMES
    // =====================================================

    const lightGroup =
      new THREE.Group()

    for (let i = 0; i < 12; i++) {

      const geometry =
        new THREE.ConeGeometry(
          0.45 +
            Math.random() * 1.1,

          18 +
            Math.random() * 12,

          4,

          1,

          true
        )

      const material =
        new THREE.MeshBasicMaterial({
          color: 0x38dfff,

          transparent: true,

          opacity:
            0.018 +
            Math.random() * 0.028,

          depthWrite: false,

          side: THREE.DoubleSide,

          blending:
            THREE.AdditiveBlending
        })

      const ray =
        new THREE.Mesh(
          geometry,
          material
        )

      ray.position.x =
        (Math.random() - 0.5) * 17

      ray.position.y =
        -0.5 +
        Math.random() * 3

      ray.position.z =
        -7 -
        Math.random() * 8

      ray.rotation.x =
        Math.PI

      ray.rotation.z =
        (Math.random() - 0.5) *
        0.18

      ray.userData.offset =
        Math.random() * Math.PI * 2

      ray.userData.speed =
        0.05 +
        Math.random() * 0.08

      lightGroup.add(ray)
    }

    scene.add(lightGroup)

    // =====================================================
    // PARTICLES
    // =====================================================

    const particleCount = 2200

    const positions =
      new Float32Array(
        particleCount * 3
      )

    const sizes =
      new Float32Array(
        particleCount
      )

    const randoms =
      new Float32Array(
        particleCount
      )

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      const i3 = i * 3

      positions[i3] =
        (Math.random() - 0.5) * 42

      positions[i3 + 1] =
        (Math.random() - 0.35) * 27

      positions[i3 + 2] =
        -2 -
        Math.random() * 38

      sizes[i] =
        0.5 +
        Math.random() * 2.3

      randoms[i] =
        Math.random()
    }

    const particleGeometry =
      new THREE.BufferGeometry()

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        positions,
        3
      )
    )

    particleGeometry.setAttribute(
      'size',
      new THREE.BufferAttribute(
        sizes,
        1
      )
    )

    particleGeometry.setAttribute(
      'aRandom',
      new THREE.BufferAttribute(
        randoms,
        1
      )
    )

    const particleMaterial =
      new THREE.ShaderMaterial({

        transparent: true,

        depthWrite: false,

        blending:
          THREE.AdditiveBlending,

        uniforms: {
          uTime: {
            value: 0
          },

          uPixelRatio: {
            value:
              Math.min(
                window.devicePixelRatio,
                2
              )
          }
        },

        vertexShader: `
          attribute float size;
          attribute float aRandom;

          uniform float uTime;
          uniform float uPixelRatio;

          varying float vAlpha;

          void main() {

            vec3 pos =
              position;

            float t =
              uTime *
              (
                0.08 +
                aRandom * 0.08
              );

            pos.x +=
              sin(
                t +
                position.z * 0.15
              ) *
              0.12;

            pos.y +=
              sin(
                t * 0.8 +
                position.x * 0.12
              ) *
              0.18;

            vec4 mvPosition =
              modelViewMatrix *
              vec4(
                pos,
                1.0
              );

            gl_PointSize =
              size *
              uPixelRatio *
              (
                90.0 /
                -mvPosition.z
              );

            gl_Position =
              projectionMatrix *
              mvPosition;

            vAlpha =
              clamp(
                1.0 /
                (-mvPosition.z * 0.045),
                0.05,
                0.65
              );
          }
        `,

        fragmentShader: `
          varying float vAlpha;

          void main() {

            float d =
              distance(
                gl_PointCoord,
                vec2(0.5)
              );

            if (d > 0.5)
              discard;

            float glow =
              1.0 -
              smoothstep(
                0.0,
                0.5,
                d
              );

            gl_FragColor =
              vec4(
                0.25,
                0.75,
                0.9,
                glow *
                vAlpha
              );
          }
        `
      })

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      )

    scene.add(particles)

    // =====================================================
    // BUBBLES
    // =====================================================

    const bubbles = []

    const bubbleGeometry =
      new THREE.SphereGeometry(
        1,
        20,
        20
      )

    for (let i = 0; i < 42; i++) {

      const bubbleMaterial =
        new THREE.MeshPhysicalMaterial({

          color:
            new THREE.Color(
              0x7cecff
            ),

          transparent: true,

          opacity:
            0.16 +
            Math.random() * 0.16,

          roughness: 0.02,

          metalness: 0,

          transmission: 0.9,

          thickness: 0.12,

          ior: 1.333,

          clearcoat: 1,

          clearcoatRoughness: 0.02,

          depthWrite: false
        })

      const bubble =
        new THREE.Mesh(
          bubbleGeometry,
          bubbleMaterial
        )

      const size =
        0.025 +
        Math.pow(
          Math.random(),
          2
        ) *
        0.20

      bubble.scale.setScalar(
        size
      )

      bubble.position.set(
        (Math.random() - 0.5) * 32,

        -10 +
          Math.random() * 16,

        -1 -
          Math.random() * 25
      )

      bubble.userData = {
        speed:
          0.008 +
          Math.random() * 0.024,

        drift:
          Math.random() *
          Math.PI *
          2,

        amplitude:
          0.02 +
          Math.random() * 0.16
      }

      scene.add(bubble)

      bubbles.push(bubble)
    }

    // =====================================================
    // MOUSE
    // =====================================================

    const mouse =
      new THREE.Vector2()

    const targetMouse =
      new THREE.Vector2()

    const handleMouseMove =
      (event) => {

        targetMouse.x =
          (
            event.clientX /
            window.innerWidth -
            0.5
          ) * 2

        targetMouse.y =
          (
            event.clientY /
            window.innerHeight -
            0.5
          ) * 2
      }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    // =====================================================
    // ANIMATION
    // =====================================================

    const clock =
      new THREE.Clock()

    let animationFrame

    const animate = () => {

      animationFrame =
        requestAnimationFrame(
          animate
        )

      const time =
        clock.getElapsedTime()

      // Smooth mouse
      mouse.lerp(
        targetMouse,
        0.025
      )

      // Background shader
      backgroundMaterial
        .uniforms
        .uTime
        .value = time

      backgroundMaterial
        .uniforms
        .uMouse
        .value.copy(
          mouse
        )

      // Particles
      particleMaterial
        .uniforms
        .uTime
        .value = time

      particles.rotation.y =
        Math.sin(time * 0.035) *
        0.018

      // Moving underwater light
      surfaceLight.position.x =
        Math.sin(time * 0.16) * 4.5

      surfaceLight.position.y =
        8.5 +
        Math.sin(time * 0.23) *
        0.6

      surfaceLight.position.z =
        1.5 +
        Math.cos(time * 0.13) * 2

      // Volumetric rays
      lightGroup.rotation.y =
        Math.sin(time * 0.07) *
        0.035

      lightGroup.rotation.z =
        Math.sin(time * 0.09) *
        0.018

      lightGroup.children.forEach(
        (ray) => {

          ray.position.x +=
            Math.sin(
              time *
                ray.userData.speed +
                ray.userData.offset
            ) *
            0.0015

          ray.material.opacity =
            0.018 +
            (
              Math.sin(
                time * 0.25 +
                ray.userData.offset
              ) *
              0.5 +
              0.5
            ) *
            0.025
        }
      )

      // Bubbles
      bubbles.forEach(
        (bubble) => {

          const data =
            bubble.userData

          bubble.position.y +=
            data.speed

          bubble.position.x +=
            Math.sin(
              time * 0.45 +
              data.drift
            ) *
            data.amplitude *
            0.008

          bubble.position.z +=
            Math.sin(
              time * 0.25 +
              data.drift
            ) *
            0.001

          bubble.rotation.x +=
            0.002

          bubble.rotation.y +=
            0.003

          if (
            bubble.position.y >
            9
          ) {

            bubble.position.y =
              -11 -
              Math.random() * 5

            bubble.position.x =
              (Math.random() - 0.5) *
              32

            bubble.position.z =
              -2 -
              Math.random() * 25
          }
        }
      )

      // Camera parallax
      camera.position.x +=
        (
          mouse.x * 0.45 -
          camera.position.x
        ) *
        0.012

      camera.position.y +=
        (
          1.2 -
          mouse.y * 0.25 -
          camera.position.y
        ) *
        0.012

      camera.lookAt(
        0,
        0,
        -5
      )

      renderer.render(
        scene,
        camera
      )
    }

    animate()

    // =====================================================
    // RESIZE
    // =====================================================

    const handleResize =
      () => {

        const width =
          window.innerWidth

        const height =
          window.innerHeight

        camera.aspect =
          width / height

        camera.updateProjectionMatrix()

        renderer.setSize(
          width,
          height
        )

        renderer.setPixelRatio(
          Math.min(
            window.devicePixelRatio,
            2
          )
        )

        backgroundMaterial
          .uniforms
          .uResolution
          .value.set(
            width,
            height
          )

        particleMaterial
          .uniforms
          .uPixelRatio
          .value =
            Math.min(
              window.devicePixelRatio,
              2
            )
      }

    window.addEventListener(
      'resize',
      handleResize
    )

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {

      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'resize',
        handleResize
      )

      backgroundGeometry.dispose()
      backgroundMaterial.dispose()

      particleGeometry.dispose()
      particleMaterial.dispose()

      bubbleGeometry.dispose()

      bubbles.forEach(
        (bubble) => {
          bubble.material.dispose()
        }
      )

      lightGroup.children.forEach(
        (ray) => {
          ray.geometry.dispose()
          ray.material.dispose()
        }
      )

      renderer.dispose()

      if (
        mount.contains(
          renderer.domElement
        )
      ) {
        mount.removeChild(
          renderer.domElement
        )
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="underwater-scene"
      aria-hidden="true"
    />
  )
}

export default UnderwaterScene