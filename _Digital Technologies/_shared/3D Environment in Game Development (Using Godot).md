---
isCurrent: false
softwareVersion:
  - "4.3"
---
Creating a 3D environment in game development involves simulating a three-dimensional space where objects can move, rotate, and interact. In **Godot Engine**, this is achieved using a combination of nodes, spatial math, and rendering systems.

## 🧭 Coordinates in 3D Space

In 3D game development, the world is defined using a **Cartesian coordinate system** with three axes:

- **X-axis**: Left ↔ Right
- **Y-axis**: Down ↕ Up
- **Z-axis**: Forward ↔ Backward

In **Godot**, the default orientation is:

- **+X** → Right
- **+Y** → Up
- **+Z** → Forward (away from the camera)

```plaintext
        Y
        ↑
        |
        |_____ X
       /
      /
     Z
```

## 📍 Position

The **position** of an object in 3D space is defined by a **vector** with three components: `(x, y, z)`.

In Godot, you can access or set an object's position using:

```gdscript
$MyObject.translation = Vector3(2, 5, -3)
```

This places the object 2 units right, 5 units up, and 3 units backward.

## 🔄 Rotation

**Rotation** in 3D is more complex than in 2D. It can be represented in several ways:

- **Euler Angles**: Rotation around X, Y, and Z axes (in degrees or radians).
- **Quaternions**: A more stable way to represent rotation, avoiding gimbal lock.
- **Basis**: A matrix that defines the orientation of an object.

In Godot, you can rotate an object like this:

```gdscript
$MyObject.rotation_degrees = Vector3(0, 90, 0)
```

This rotates the object 90° around the Y-axis.

## 📏 Scale

**Scale** changes the size of an object along each axis. A scale of `Vector3(1, 1, 1)` means normal size.

```gdscript
$MyObject.scale = Vector3(2, 1, 1)
```

This doubles the size along the X-axis.

## 🧮 Vectors

A **vector** in 3D game development is a fundamental concept used to represent **direction**, **position**, **velocity**, **acceleration**, and more. In Godot, vectors are represented using the `Vector3` class, which holds three components: `x`, `y`, and `z`.

### 📌 What Is a Vector?

A vector is a quantity that has both:

- **Magnitude** (length)
- **Direction** (where it's pointing)

For example, `Vector3(1, 0, 0)` points along the positive X-axis and has a magnitude of 1.

### 🧰 Common Uses of Vectors in Godot

|Use Case|Example Vector|Description|
|---|---|---|
|**Position**|`Vector3(2, 5, -3)`|Location in 3D space|
|**Direction**|`Vector3(0, 0, -1)`|Facing forward|
|**Velocity**|`Vector3(3, 0, 0)`|Moving right at speed 3|
|**Scale**|`Vector3(1, 2, 1)`|Twice as tall|
|**Force**|`Vector3(0, 9.8, 0)`|Gravity force upward|

### ✏️ Vector Operations

Godot provides many built-in operations for working with vectors:

#### ➕ Addition

```gdscript
var a = Vector3(1, 2, 3)
var b = Vector3(4, 5, 6)
var result = a + b  # Vector3(5, 7, 9)
```

Used to combine movements or positions.

#### ✖️ Scalar Multiplication

```gdscript
var direction = Vector3(0, 0, -1)
var speed = 10
var velocity = direction * speed  # Vector3(0, 0, -10)
```

Scales a vector to change its magnitude.

#### 📏 Length (Magnitude)

```gdscript
var v = Vector3(3, 4, 0)
var length = v.length()  # 5
```

Useful for measuring distance or speed.

#### 🎯 Normalization

```gdscript
var v = Vector3(3, 0, 4)
var unit = v.normalized()  # Vector3(0.6, 0, 0.8)
```

Converts a vector to a unit vector (length = 1), preserving direction.

#### 🔄 Dot Product

```gdscript
var a = Vector3(1, 0, 0)
var b = Vector3(0, 1, 0)
var dot = a.dot(b)  # 0 (they are perpendicular)
```

Used to find angles between vectors or determine alignment.

#### 🔁 Cross Product

```gdscript
var a = Vector3(1, 0, 0)
var b = Vector3(0, 1, 0)
var cross = a.cross(b)  # Vector3(0, 0, 1)
```

Returns a vector perpendicular to both inputs — useful for calculating surface normals.

### 🧭 Directional Movement Example

```gdscript
var direction = (target_position - current_position).normalized()
var velocity = direction * speed
position += velocity * delta
```

This moves an object toward a target at a constant speed.
