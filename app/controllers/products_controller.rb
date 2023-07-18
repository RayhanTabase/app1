class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]
  # load_and_authorize_resource

  def index
  end

  def category
    category_name = params[:category]
    page = params[:page] || 1
    per_page = 6
  
    # Find the associated tag with the given category name
    tag = Tag.where(nature: "category").find_by(name: category_name)
  
    if tag.present?
      # Filter products based on the associated tag and paginate the results
      @products = Product.all.where(tag_id: tag.id)
                         .offset((page.to_i - 1) * per_page)
                         .limit(per_page)
      render json: @products, each_serializer: ProductSerializer || []
    else
      render json: { error: 'Invalid category' }, status: :unprocessable_entity
    end
  end
  
  def search
    query = params[:query]
    page = params[:page] || 1
    per_page = 6
  
    # Filter products based on query text and sort by name
    filtered_products = Product.all
                              .where('name LIKE :query OR description LIKE :query', query: "#{query}%")
                              .order(Arel.sql("CASE WHEN name LIKE '#{query}%' THEN 0 ELSE 1 END, name ASC"))
  
    # Paginate the filtered products
    @products = filtered_products.offset((page.to_i - 1) * per_page)
                                .limit(per_page)
    render json: @products, each_serializer: ProductSerializer || []
  end

  def new
    @product = Product.new
    @categories = Tag.where(nature: "category")
  end

  def show
    render json: @product
  end

  def create
    tag_id = params[:product][:tag_id].to_i
    name = params[:product][:name]
    description = params[:product][:description]
    price = params[:product][:price]
    quantity = params[:product][:quantity]
    image = params[:product][:image]
    
    @product = Product.new(
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      tag_id: tag_id,
      image: image
    )
    
    @product.user = current_user
    
    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end
  
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    head :no_content
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :quantity, :image, :price, :tag_id)
  end
end
