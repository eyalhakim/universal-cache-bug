import { CategoriesStorage } from '../categories/categories-storage';
import { Category } from './../categories/Category';
export class ExperienceHelper {
    static getUrl(experience: Category) {
        let mainCategory;
        let category: Category;
        if (category = CategoriesStorage.activities.find(category => category.subCategories.includes(experience))) {
            mainCategory = 'team-building';
        } else if (category = CategoriesStorage.wellness.find(category => category.subCategories.includes(experience))) {
            mainCategory = 'wellness';
        } else {
            category = CategoriesStorage.perks.find(category => category.subCategories.includes(experience));
            mainCategory = 'perks';
        }

        return `${mainCategory}/category/${category.name}/${experience.name}`;
    }
}