export interface GetAllCard {
    attribute?: string;
    cardnumber?: string;
    cardset?: string;
    color?: string;
    digivolve1cost?: number;
    digivolve1level?: string;
    digivolve2cost?: number;
    digivolve2level?: string;
    dp?: number;
    dpcost?: number;
    effect?: string;
    image_url?: string;
    level?: number;
    name?: string;
    playcost?: number;
    rarity?: string;
    stage?: string;
    type?: string;
}
export interface GetAllCardListMatch {
    sort?: string;
    sortdirection?: string;
}
export interface Search {
    attribute?: string;
    cardnumber?: string;
    cardset?: string;
    color?: string;
    digivolve1cost?: number;
    digivolve1level?: string;
    digivolve2cost?: number;
    digivolve2level?: string;
    dp?: number;
    dpcost?: number;
    effect?: string;
    image_url?: string;
    level?: number;
    name?: string;
    playcost?: number;
    rarity?: string;
    stage?: string;
    type?: string;
}
export interface SearchListMatch {
    attribute?: string;
    card?: string;
    cardnumber?: string;
    color?: string;
    dpcost?: number;
    level?: number;
    playcost?: number;
    series?: string;
    sort?: string;
    sortdirection?: string;
    stage?: string;
    type?: string;
}
