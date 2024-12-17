export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ItemGold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

export type ItemMaps = {
  [mapId: string]: boolean;
};

export type ItemStats = {
  FlatMovementSpeedMod?: number;
};

export interface ItemData {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext?: string;
  into?: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
}

export interface ItemListResponse {
  data: Record<string, ItemData>;
}
  