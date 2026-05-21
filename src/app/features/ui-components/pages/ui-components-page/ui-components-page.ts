import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlassStatCard } from './components/glass-stat-card';
import { GradientCtaBanner } from './components/gradient-cta-banner';
import { FeatureChipList } from './components/feature-chip-list';
import { UiHero } from './components/ui-hero';
import { UiStat } from './components/ui-stat';
import { UiSteps } from './components/ui-steps';
import { UiChat } from './components/ui-chat';
import { UiTimeline } from './components/ui-timeline';

@Component({
  selector: 'app-ui-components-page',
  standalone: true,
  imports: [
    GlassStatCard, 
    GradientCtaBanner, 
    FeatureChipList,
    UiHero, 
    UiStat, 
    UiSteps, 
    UiChat, 
    UiTimeline
  ],
  templateUrl: './ui-components-page.html',
  styleUrl: './ui-components-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponentsPage {
  readonly quickChips: string[] = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];
}