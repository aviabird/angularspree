import { Brand } from '../../core/models/brand';
import { Review } from '../../core/models/review';
import { RatingOption } from '../../core/models/rating_option';

export class ProductActions {
  static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
  static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
  static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
  static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
  static CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
  static GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
  static GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
  static GET_ALL_PRODUCTS_SEARCH_SUCCESS = 'GET_ALL_PRODUCTS_SEARCH_SUCCESS';
  static GET_RELATED_PRODUCT = 'GET_RELATED_PRODUCT';
  static GET_RELATED_PRODUCT_SUCCESS = 'GET_RELATED_PRODUCT_SUCCESS';
  static GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS';
  static GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
  static GET_ALL_BRANDS = 'GET_ALL_BRANDS';
  static GET_ALL_BRANDS_SUCCESS = 'GET_ALL_BRANDS_SUCCESS';
  static WRITE_PRODUCT_REVIEW = 'WRITE_PRODUCT_REVIEW';
  static WRITE_REVIEW_SUCCESS = 'WRITE_REVIEW_SUCCESS';
  static GET_RATING_OPTIONS = 'GET_RATING_OPTIONS';
  static GET_RATING_OPTIONS_SUCCESS = 'GET_RATING_OPTIONS_SUCCESS';




  getAllProducts(pageNumber = 1) {
    return {
      type: ProductActions.GET_ALL_PRODUCTS,
      payload: pageNumber
    };
  }

  getProductDetail(id: string) {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL,
      payload: id
    };
  }

  getAllProductsSuccess(products: any) {
    return {
      type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
      payload: products
    };
  }

  getProductDetailSuccess(data: { product }) {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
      payload: data
    };
  }

  clearSelectedProduct() {
    return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
  }

  getAllTaxonomies() {
    return { type: ProductActions.GET_ALL_TAXONOMIES };
  }

  getAllTaxonomiesSuccess(taxonomies: any) {
    return {
      type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
      payload: taxonomies
    };
  }

  getRelatedProduct(product_id: any) {
    return {
      type: ProductActions.GET_RELATED_PRODUCT,
      payload: product_id
    };
  }

  getRelatedProductSuccess(products: any) {
    return {
      type: ProductActions.GET_RELATED_PRODUCT_SUCCESS,
      payload: products
    };
  }

  getProductReviews(productId: number) {
    return {
      type: ProductActions.GET_PRODUCT_REVIEWS,
      payload: productId
    };
  }

  getProductReviewsSuccess(reviews: Array<Review>) {
    return {
      type: ProductActions.GET_REVIEWS_SUCCESS,
      payload: reviews
    };
  }

  getBrands() {
    return {
      type: ProductActions.GET_ALL_BRANDS
    }
  }

  getBrandsSuccess(brands: Array<Brand>) {
    return {
      type: ProductActions.GET_ALL_BRANDS_SUCCESS,
      payload: brands
    }
  }

  writeProductReview(reviewParams: Object) {
    return {
      type: ProductActions.WRITE_PRODUCT_REVIEW,
      payload: reviewParams
    }
  }

  writeProductReviewSuccess(review: Review) {
    return {
      type: ProductActions.WRITE_REVIEW_SUCCESS,
      payload: review
    }
  }

  getRatingsOptions(ratingCategoryId: number) {
    return {
      type: ProductActions.GET_RATING_OPTIONS,
      payload: ratingCategoryId
    }
  }

  getRatingsOptionsSuccess(ratingOptions: Array<RatingOption>) {
  return {
    type: ProductActions.GET_RATING_OPTIONS_SUCCESS,
    payload: ratingOptions
  }
}
}
