---
name: Industrial Luxe Barbershop
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7a582b'
  on-secondary: '#ffffff'
  secondary-container: '#fecf97'
  on-secondary-container: '#79572a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#28180d'
  on-tertiary-container: '#987f6f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#ecbf88'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#5f4115'
  tertiary-fixed: '#fbddca'
  tertiary-fixed-dim: '#dec1af'
  on-tertiary-fixed: '#28180d'
  on-tertiary-fixed-variant: '#574335'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

This design system is built on the philosophy of **Industrial Elegance**. It mirrors the atmosphere of a high-end, urban barber studio where raw materials like concrete and steel meet the refined warmth of polished wood and brass fixtures. The brand personality is masculine, decisive, and uncompromisingly professional. 

The aesthetic style is a hybrid of **Minimalism** and **Tactile Industrialism**. We prioritize heavy whitespace and structured grids to reflect the precision of a master barber's cut. Visual interest is generated through high-contrast material metaphors—matte surfaces against metallic accents—evoking a sense of heritage craftsmanship within a modern, metropolitan context. The UI should feel as solid and reliable as a heavy-duty barber chair, yet as sophisticated as a luxury fragrance.

## Colors

The palette is rooted in the "Matte Black & Metal" aesthetic. 
- **Matte Black (#121212)** is used for primary branding, headers, and navigation to establish a strong, masculine anchor.
- **Copper/Antique Gold (#B38B59)** serves as the luxury accent, used sparingly for calls to action, active states, and premium highlights.
- **Dark Wood (#3D2B1F)** provides a tertiary depth, used in subtle gradients or decorative dividers to soften the industrial coldness.
- **Charcoal Grey (#4A4A4A)** acts as the functional neutral for secondary text and borders.
- **Content Background (#F9F9F9)** ensures the reading experience is clean and professional, providing high contrast against the dark navigation elements.

## Typography

This design system utilizes **Inter** exclusively to maintain a utilitarian, Swiss-inspired clarity. 

Headlines are set with heavy weights (Bold to Black) and tight letter-spacing to mimic industrial signage and vintage barber shopfronts. Display type should feel architectural and commanding. Body text prioritizes legibility with generous line heights, while Labels use uppercase styling and wider tracking to evoke the look of technical equipment engravings and high-end product packaging.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to create a centered, gallery-like experience. We use a 12-column system with a 24px gutter. 

Spacing is governed by an 8px rhythmic scale. Large "Section Gaps" (80px+) are used to separate service tiers and brand stories, ensuring the layout never feels crowded. Internal component spacing should feel precise—favoring symmetrical padding to reinforce the "professional cut" metaphor. Alignment should be strictly adhered to; elements should feel "snapped" into place against the charcoal grid lines.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** and **Studio Lighting shadows**. 

Rather than standard drop shadows, we use very soft, large-radius ambient occlusions that mimic overhead gallery lighting. 
1. **The Floor:** Pure white or light grey (#F9F9F9).
2. **The Surface:** High-contrast matte black cards used for "Service Selection."
3. **The Accent:** 1px solid borders in "Antique Gold" are used instead of shadows for interactive elements to maintain a flat, industrial profile.
4. **The Texture:** Subtle noise overlays on dark surfaces to simulate the feel of concrete or brushed metal.

## Shapes

The shape language is **Soft Industrial**. We avoid aggressive rounding to maintain a masculine, structural feel. 

A base radius of 4px (`rounded-sm`) is applied to buttons and input fields to take the "edge" off while remaining essentially rectangular. Larger containers, such as modal windows or featured cards, may use up to 8px. Icons should follow a "linear-bold" style with squared-off terminals to match the typography.

## Components

### Buttons
- **Primary:** Solid Matte Black with White or Gold text. No rounded corners beyond 4px. 
- **Secondary:** Outlined in Charcoal or Gold. 
- **Interaction:** On hover, primary buttons shift to a deep charcoal; secondary buttons fill with a subtle "Dark Wood" tint.

### Cards
Cards use a minimalist approach. Service cards feature a "Concrete" grey background or a subtle 1px border. Photography within cards should be high-contrast black and white or moody, warm-toned shots of the studio interior.

### Input Fields
Inputs are defined by a bottom-border-only style or a very thin 1px charcoal frame. Focus states are indicated by the border turning to Gold. Label text always sits above the field in the "Label-Bold" uppercase style.

### Selection Controls
Checkboxes and Radios are strictly square. When active, they fill with Gold. This reinforces the technical, tool-like nature of the interface.

### Additional Components
- **The "Service List":** High-contrast rows with "Antique Gold" price markers.
- **The "Booking Bar":** A persistent, dark-themed footer or header component that houses the primary "Book Now" CTA, ensuring it feels like a specialized tool within the interface.