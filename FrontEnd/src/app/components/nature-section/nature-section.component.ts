import { Component, signal } from '@angular/core';

export interface Ingredient {
  id: string;
  name: string;
  tagline: string;
  imageClass: string;
  imageUrl: string;
  whatItIs: string;
  whyIncluded: string;
  traditionalUse: string;
  formulaSupport: string;
}

@Component({
  selector: 'app-nature-section',
  standalone: true,
  templateUrl: './nature-section.component.html',
  styleUrls: ['./nature-section.component.scss']
})
export class NatureSectionComponent {
  selectedIngredient = signal<Ingredient | null>(null);

  ingredients: Ingredient[] = [
    {
      id: 'henna',
      name: 'Henna',
      tagline: 'Natural colour + conditioning',
      imageClass: 'botanical-henna',
      imageUrl: 'assets/ingredients/henna.jpg',
      whatItIs: 'Henna is a plant-based botanical traditionally used for natural hair colouring.',
      whyIncluded: 'Provides the natural colour base while contributing to a conditioned hair feel.',
      traditionalUse: 'Traditionally used in Indian hair-care rituals for generations.',
      formulaSupport: 'Acts as the primary botanical colour component of the formula.'
    },
    {
      id: 'aloevera',
      name: 'Aloe Vera',
      tagline: 'Scalp & hair conditioning',
      imageClass: 'botanical-aloe',
      imageUrl: 'assets/ingredients/aloe.jpg',
      whatItIs: 'Aloe vera is a botanical traditionally valued for its soothing and conditioning properties.',
      whyIncluded: 'Helps support a comfortable scalp feel and conditioned hair.',
      traditionalUse: 'Widely used in traditional and modern personal-care formulations.',
      formulaSupport: 'Complements the colouring experience with a conditioning botanical.'
    },
    {
      id: 'amla',
      name: 'Amla',
      tagline: 'Traditional hair-care support',
      imageClass: 'botanical-amla',
      imageUrl: 'assets/ingredients/amla.jpg',
      whatItIs: 'Amla, also known as Indian gooseberry, is a traditional Indian botanical.',
      whyIncluded: 'Adds a familiar botanical element to the hair-care formulation.',
      traditionalUse: 'Traditionally used in Indian hair-care practices.',
      formulaSupport: 'Supports the formula\'s botanical hair-care positioning.'
    },
    {
      id: 'shikakai',
      name: 'Shikakai',
      tagline: 'Cleansing + conditioning',
      imageClass: 'botanical-shikakai',
      imageUrl: 'assets/ingredients/shikakai.jpg',
      whatItIs: 'Shikakai is a traditional Indian botanical commonly associated with hair cleansing.',
      whyIncluded: 'Adds a traditional cleansing and conditioning element to the formula.',
      traditionalUse: 'Traditionally used as a natural hair cleanser.',
      formulaSupport: 'Complements the overall botanical hair-care formulation.'
    },
    {
      id: 'reetha',
      name: 'Reetha',
      tagline: 'Cleansing support',
      imageClass: 'botanical-reetha',
      imageUrl: 'assets/ingredients/reetha.jpg',
      whatItIs: 'Reetha, also known as soapnut, is a traditional botanical used for cleansing.',
      whyIncluded: 'Provides a naturally derived cleansing-support component.',
      traditionalUse: 'Traditionally used as a natural cleansing ingredient for hair.',
      formulaSupport: 'Supports the cleansing aspect of the botanical formulation.'
    },
    {
      id: 'neem',
      name: 'Neem',
      tagline: 'Scalp hygiene support',
      imageClass: 'botanical-neem',
      imageUrl: 'assets/ingredients/neem.jpg',
      whatItIs: 'Neem is a well-known traditional Indian botanical used in personal-care practices.',
      whyIncluded: 'Adds a botanical element traditionally associated with scalp-care routines.',
      traditionalUse: 'Used traditionally in Indian personal-care and hair-care practices.',
      formulaSupport: 'Complements the formula\'s traditional botanical profile.'
    },
    {
      id: 'bhringraj',
      name: 'Bhringraj',
      tagline: 'Traditional hair-care support',
      imageClass: 'botanical-bhringraj',
      imageUrl: 'assets/ingredients/bhringraj.jpg',
      whatItIs: 'Bhringraj is a traditional Ayurvedic botanical associated with hair-care rituals.',
      whyIncluded: 'Adds a familiar traditional botanical to the formulation.',
      traditionalUse: 'Traditionally used in Indian hair and scalp-care practices.',
      formulaSupport: 'Strengthens the traditional botanical positioning of the formula.'
    },
    {
      id: 'tulsi',
      name: 'Tulsi',
      tagline: 'Traditional botanical care',
      imageClass: 'botanical-tulsi',
      imageUrl: 'assets/ingredients/tulsi.jpg',
      whatItIs: 'Tulsi, or holy basil, is a traditional Indian botanical widely used in wellness and personal-care practices.',
      whyIncluded: 'Adds a recognizable botanical component to the formulation.',
      traditionalUse: 'Traditionally valued in Indian botanical practices.',
      formulaSupport: 'Complements the overall botanical ingredient story.'
    },
    {
      id: 'onionseed',
      name: 'Onion Seed',
      tagline: 'Hair-care formulation support',
      imageClass: 'botanical-onion',
      imageUrl: 'assets/ingredients/onion.jpg',
      whatItIs: 'Onion seed is a botanical ingredient included as part of the formula\'s plant-based ingredient profile.',
      whyIncluded: 'Adds another botanical component to the overall hair-care formulation.',
      traditionalUse: 'Used in various traditional and contemporary hair-care practices.',
      formulaSupport: 'Complements the formula\'s botanical positioning.'
    }
  ];

  selectIngredient(ingredient: Ingredient) {
    if (this.selectedIngredient()?.id === ingredient.id) {
      this.selectedIngredient.set(null);
    } else {
      this.selectedIngredient.set(ingredient);
      setTimeout(() => {
        const panel = document.getElementById('ingredient-detail-panel');
        if (panel) {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  }

  closePanel() {
    this.selectedIngredient.set(null);
  }
}
