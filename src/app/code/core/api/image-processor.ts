/**
 * @description Image processor interface
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default interface IImageProcessor {
  /**
   * Render pixels
   * 
   * @returns {void}
   */
  render(): void;
}