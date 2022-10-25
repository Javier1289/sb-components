import './mylabel.css';

export interface MyLabelProps {
    /**
     * Enter text to display
     */
    label: string;
    /**
     * Text size to display
     */
    size:  'normal' | 'h1' | 'h2' | 'h3';

	/**
	 * Captilize all characters
	 */
    allCaps: boolean;
	/**
	 * Text color
	 */
    color?: 'primary' | 'secondary' | 'tertiary';

	/**
	 * Custom color 
	 */
    fontColor?: string;
}


export const MyLabel = ({
    label='No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
}: MyLabelProps) => {
  return (
    <span 
        className={`label ${ size } ${( color ) ? 'text-' + color : '' }`}
		style = { ( fontColor ) ?  { color: fontColor } : {} }	
	>
        { ( allCaps ) ? label.toUpperCase() : label }
    </span>
  )
}
