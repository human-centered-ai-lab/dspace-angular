import { Component } from '@angular/core';
import { SearchResultListElementComponent } from '../../../../../shared/object-list/search-result-list-element/search-result-list-element.component';
import { ItemSearchResult } from '../../../../../shared/object-collection/shared/item-search-result.model';
import { Item } from '../../../../../core/shared/item.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../core/shared/view-mode.model';

@listableObjectComponent('WsiSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-wsi-search-result-list-element',
  styleUrls: ['./wsi-search-result-list-element.component.scss'],
  templateUrl: './wsi-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Wsi
 */
export class WsiSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
}
