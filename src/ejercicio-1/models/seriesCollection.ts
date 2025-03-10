import { BasicStreamableCollection } from "./basicStreamableCollection";
import { MediaItem } from "./mediaItem";

/**
 * Representa una colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<MediaItem> {
  searchByTitle(title: string): MediaItem[] {
    return this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): MediaItem[] {
    return this.items.filter(item => item.year === year);
  }
}
