export interface ProductModel {
	id: string,
	externalId: string,
	name: string,
	source: string,
	defaultTierPriceQuantity: number,
	originalPrice: number,
	retailPrice: string,
	wholesalePrices: string,
	isReviewNeeded: boolean,
	sourceType: number,
	metadata: object,
	newMetadata: object,
	priceAdjustment: string,
	retailPriceAdjustment: string,
	isDisabled: boolean
}