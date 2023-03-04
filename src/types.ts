export type Pagination = { offset: number; count: number; total_count: number };

export type Response<TData> = { pagination: Pagination; data: TData };

export type Subcategory = {
	name: string;
	name_encoded: string;
};

export type GifImage = {
	url: string;
	width: string;
	height: string;
	size: string;
	mp4: string;
	mp4_size: string;
	webp: string;
	webp_size: string;
};

export type StillImage = Pick<GifImage, 'url' | 'height' | 'width'>;

export type ImageType =
	| 'fixed_width_still'
	| 'preview_gif'
	| 'fixed_height_downsampled'
	| 'preview'
	| 'fixed_height_small'
	| 'downsized'
	| 'fixed_width_downsampled'
	| 'fixed_width'
	| 'downsized_still'
	| 'downsized_medium'
	| 'original_mp4'
	| 'downsized_large'
	| 'preview_webp'
	| 'original'
	| 'original_still'
	| 'fixed_height_small_still'
	| 'fixed_width_small'
	| 'looping'
	| 'downsized_small'
	| 'fixed_width_small_still'
	| 'fixed_height_still'
	| 'fixed_height'
	| '480w_still';

export type Images = {
	[K in ImageType]: K extends `${string}_still` ? StillImage : GifImage;
};

export type Gif = {
	id: string;
	type: string;
	slug: string;
	url: string;
	source_tld: string;
	images: Images;
	title: string;
	alt_text: string;
};

export type Category = {
	name: string;
	name_encoded: string;
	subcategories: Subcategory[];
	gif: Gif;
};
