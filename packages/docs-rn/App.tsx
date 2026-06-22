import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing } from '@andersonlucasp/tokens';
import { DsText, DsButton, DsCard, DsBadge, DsInput } from '@andersonlucasp/rn';

export default function App() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [inputValue, setInputValue] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    header: {
      backgroundColor: colors.interactive.default,
      padding: spacing.lg,
      paddingTop: spacing.xl,
    },
    headerText: {
      color: '#ffffff',
      marginBottom: spacing.sm,
    },
    scrollContent: {
      padding: spacing.lg,
      gap: spacing.lg,
    },
    section: {
      gap: spacing.md,
    },
    sectionTitle: {
      marginTop: spacing.md,
      marginBottom: spacing.sm,
    },
    componentRow: {
      flexDirection: 'row',
      gap: spacing.md,
      flexWrap: 'wrap',
    },
    card: {
      marginBottom: spacing.md,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <DsText size="2xl" weight="bold" color="inverse">
          Momentum DS
        </DsText>
        <DsText size="sm" color="inverse" variant="body">
          Component Showcase & Testing
        </DsText>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Button Section */}
        <View style={styles.section}>
          <DsText variant="heading" size="xl" weight="semibold" style={styles.sectionTitle}>
            Buttons
          </DsText>

          {/* Primary Variant */}
          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Primary Variant
            </DsText>
            <View style={styles.componentRow}>
              <DsButton size="sm">Small</DsButton>
              <DsButton size="md">Medium</DsButton>
              <DsButton size="lg">Large</DsButton>
            </View>
          </DsCard>

          {/* Secondary Variant */}
          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Secondary Variant
            </DsText>
            <View style={styles.componentRow}>
              <DsButton variant="secondary" size="sm">
                Small
              </DsButton>
              <DsButton variant="secondary" size="md">
                Medium
              </DsButton>
              <DsButton variant="secondary" size="lg">
                Large
              </DsButton>
            </View>
          </DsCard>

          {/* Danger Variant */}
          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Danger Variant
            </DsText>
            <View style={styles.componentRow}>
              <DsButton variant="danger" size="sm">
                Small
              </DsButton>
              <DsButton variant="danger" size="md">
                Medium
              </DsButton>
              <DsButton variant="danger" size="lg">
                Large
              </DsButton>
            </View>
          </DsCard>

          {/* States */}
          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              States
            </DsText>
            <View style={styles.componentRow}>
              <DsButton disabled>Disabled</DsButton>
              <DsButton loading>Loading</DsButton>
            </View>
          </DsCard>
        </View>

        {/* Input Section */}
        <View style={styles.section}>
          <DsText variant="heading" size="xl" weight="semibold" style={styles.sectionTitle}>
            Inputs
          </DsText>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Default Input
            </DsText>
            <DsInput
              placeholder="Type something..."
              value={inputValue}
              onChangeText={setInputValue}
            />
            <DsText color="secondary" size="sm">
              Value: {inputValue || '(empty)'}
            </DsText>
          </DsCard>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Input Sizes
            </DsText>
            <DsInput size="sm" placeholder="Small input" />
            <DsInput size="md" placeholder="Medium input" />
            <DsInput size="lg" placeholder="Large input" />
          </DsCard>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Input Variants
            </DsText>
            <DsInput placeholder="Default" />
            <DsInput placeholder="Success" variant="success" />
            <DsInput placeholder="Error" variant="error" />
          </DsCard>
        </View>

        {/* Badge Section */}
        <View style={styles.section}>
          <DsText variant="heading" size="xl" weight="semibold" style={styles.sectionTitle}>
            Badges
          </DsText>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Default Badges
            </DsText>
            <View style={styles.componentRow}>
              <DsBadge>Default</DsBadge>
              <DsBadge variant="success">Success</DsBadge>
              <DsBadge variant="warning">Warning</DsBadge>
              <DsBadge variant="danger">Danger</DsBadge>
            </View>
          </DsCard>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Badge Sizes
            </DsText>
            <View style={styles.componentRow}>
              <DsBadge size="sm">Small</DsBadge>
              <DsBadge size="md">Medium</DsBadge>
              <DsBadge size="lg">Large</DsBadge>
            </View>
          </DsCard>

          {/* Academy Use Cases */}
          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Academy Use Cases
            </DsText>
            <View style={styles.componentRow}>
              <DsBadge variant="success">Available (5)</DsBadge>
              <DsBadge variant="danger">Full</DsBadge>
              <DsBadge variant="warning">Waitlist</DsBadge>
            </View>
          </DsCard>
        </View>

        {/* Card Section */}
        <View style={styles.section}>
          <DsText variant="heading" size="xl" weight="semibold" style={styles.sectionTitle}>
            Cards
          </DsText>

          <DsCard variant="default">
            <DsText weight="semibold" size="lg">
              Default Card
            </DsText>
            <DsText color="secondary">
              White background with subtle border
            </DsText>
          </DsCard>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Elevated Card
            </DsText>
            <DsText color="secondary">
              White with shadow (hover/interactive state)
            </DsText>
          </DsCard>

          <DsCard variant="outlined">
            <DsText weight="semibold" size="lg">
              Outlined Card
            </DsText>
            <DsText color="secondary">
              Transparent background with border
            </DsText>
          </DsCard>

          {/* Academy Example */}
          <DsCard variant="elevated">
            <View
              style={{
                gap: spacing.md,
              }}
            >
              <DsText weight="semibold" size="lg">
                Yoga Class
              </DsText>
              <DsText color="secondary">
                Monday, 8:00 AM - 9:00 AM
              </DsText>
              <DsText color="secondary" size="sm">
                Instructor: Sarah Anderson
              </DsText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <DsBadge variant="success">Available (5)</DsBadge>
                <DsButton variant="primary" size="sm">
                  Reserve
                </DsButton>
              </View>
            </View>
          </DsCard>
        </View>

        {/* Colors Section */}
        <View style={styles.section}>
          <DsText variant="heading" size="xl" weight="semibold" style={styles.sectionTitle}>
            Design Tokens
          </DsText>

          <DsCard variant="elevated">
            <DsText weight="semibold" size="lg">
              Primary Colors
            </DsText>
            <View style={{ gap: spacing.md }}>
              {Object.entries(colors.primary).map(([key, value]: any) => (
                <View
                  key={key}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: spacing.md,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: value,
                      borderRadius: 8,
                    }}
                  />
                  <View>
                    <DsText weight="semibold">{key}</DsText>
                    <DsText size="sm" color="secondary">
                      {value}
                    </DsText>
                  </View>
                </View>
              ))}
            </View>
          </DsCard>
        </View>

        {/* Spacing */}
        <View style={{ height: spacing.lg }} />
      </ScrollView>
    </SafeAreaView>
  );
}
