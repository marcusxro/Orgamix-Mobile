import FontAwesome from '@expo/vector-icons/FontAwesome';

interface EyeIconProps {
    size?: number;
    color?: string;
    name: React.ComponentProps<typeof FontAwesome>['name']; // Restrict strictly to FontAwesome icon names
}

export default function IconComponent({
    size = 24, 
    color = "#000",
    name,
}: EyeIconProps) {
    return <FontAwesome name={name} size={size} color={color} />;
}
