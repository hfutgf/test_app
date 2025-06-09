export type HotelType = {
  detail: string;
  gptDetails: string;
  hotel_key: number;
  hotel_url: string;
  main_photo: string;
  name: string;
  nearbyItems: string[];
  order_number: number;
  photos: string[];
  short_description: string;
  star: string;
  star_alt: string;
  star_key: number;
  state_key: number;
  tags: string[];
  top_hotel_order: number;
  top_hotel_status: false;
  tour_operator_id: number;
  town_key: number;
  widget: string | null;
};

export type TravelType = {
  adult: number;
  check_in: string;
  check_out: string;
  child: number;
  converted_price_number: number;
  converted_price_old: string;
  hotel: HotelType;
  hotel_key: number;
  id: string;
  meal: string;
  nights: number;
  price: string;
  price_old: string;
  room: string;
  state_id: number;
  tour_key: number;
  town_from_id: number;
  town_name: string;
};

export type TourDataType = {
  description: string;
  id: number;
  image: string;
  image_medium: null;
  image_original: string;
  image_thumbnail: null;
  name: string;
  name_alt: string;
  name_en: string;
  name_ru: string;
  name_uz: string;
  partner: string;
  status: true;
  type: string;
  visa_text: null;
  widget: null;
};

export type FiltersType = {
  price_range: {
    min: number;
    max: number;
  };
  star_keys: string[];
};

export type TravlesResponseType = {
  status: boolean;
  data: TravelType[];
  tour_data: TourDataType;
  filters: FiltersType;
};
