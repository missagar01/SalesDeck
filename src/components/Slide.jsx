export default function Slide({ children, isActive, center, desktopCenter }) {
  return (
    <div className={`slide ${isActive ? 'active' : ''} ${center ? 'slide--center' : ''} ${desktopCenter ? 'slide--desktop-center' : ''}`}>
      {children}
    </div>
  );
}
