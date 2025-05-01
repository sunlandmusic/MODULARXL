import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable, ViewStyle, View, Text, Animated, Dimensions } from 'react-native';
import { Eye } from 'lucide-react-native';

interface EyeButtonProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
}

interface NavItem {
  label: string;
  route: string;
}

export const EyeButton: React.FC<EyeButtonProps> = ({
  currentRoute,
  onNavigate,
  style,
  size = 24,
  color = '#FFFFFF'
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(-300)).current;

  // Navigation items
  const navItems: NavItem[] = [
    { 
      label: 'CHORD\nCOMPOSE', 
      route: '/(tabs)'
    },
    { 
      label: 'CHORD\n- INATE', 
      route: '/(tabs)/cordinate'
    },
    {
      label: 'PIANO\nXL',
      route: '/(tabs)/pianoxl'
    }
  ];

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuVisible ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuVisible, slideAnim]);

  const handlePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleNavigation = (route: string) => {
    onNavigate(route);
    setIsMenuVisible(false);
  };

  const isRouteActive = (route: string) => {
    return currentRoute === route;
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, style]}
        onPress={handlePress}
      >
        <Eye size={size} color={color} />
      </Pressable>

      {/* Backdrop - only visible when menu is open */}
      {isMenuVisible && (
        <Pressable 
          style={styles.backdrop} 
          onPress={() => setIsMenuVisible(false)}
        />
      )}
      
      {/* Navigation Menu */}
      <Animated.View 
        style={[
          styles.menuContainer,
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        <View style={styles.navItems}>
          {navItems.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.navItem,
                isRouteActive(item.route) && styles.activeNavItem
              ]}
              onPress={() => handleNavigation(item.route)}
            >
              <Text style={styles.navLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000, // Ensure menu appears above other content
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  backdrop: {
    position: 'absolute',
    top: -100, // Extended to cover full screen
    left: -100,
    right: -100,
    bottom: -100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  menuContainer: {
    position: 'absolute',
    top: -88, // Adjust to align with top of screen
    left: 0,
    width: 205,
    height: '100vh', // Full viewport height
    backgroundColor: '#000000',
    zIndex: 1000,
    paddingTop: 88,
    paddingHorizontal: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  navItems: {
    marginTop: -47,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    width: '100%',
    justifyContent: 'center',
  },
  activeNavItem: {
    backgroundColor: '#FFA500', // Orange color for active item
  },
  navLabel: {
    color: '#FFFFFF',
    fontSize: 18.4,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 23,
  },
}); 