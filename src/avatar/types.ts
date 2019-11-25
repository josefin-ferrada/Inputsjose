
/**
 * Propiedades del componente Avatar.
 */
export type PropAvatar = {
  /** Link de la imagen. */
  image: string;
  /** Descripcion corta de la imagen. */
  alt: string;
  /** Diámetro de la figura. */
  size: number;
  /** Id del usuario. */
  userId: number;
  /** Link de la imagen de usuario. */
  picture: string;
  /** Nombre completo de usuario. */
  fullName: string;
  /** Tamaño de la fuente en pixeles. */
  fontSize: number;
}

/**
 * Propiedades del componente Wrapper.
 */
export type IWrapper = {
  /** Diámetro de la figura. */
  size: number;
  /** Random color opcional. */
  selectedColor: string | null;
  /** Tamaño de la fuente en pixeles. */
  fontSize: number;
}
