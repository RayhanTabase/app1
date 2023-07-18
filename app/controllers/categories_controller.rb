class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    categories = Tag.where(nature: "category")
    render json: categories
  end

  def edit
  end

  # POST /api/categories
  def create
    category = Tag.new(category_params)
    category.nature = "category"
    if category.save
      render json: category, status: :created
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/categories/:id
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/categories/:id
  def destroy
    @category.destroy
    head :no_content
  end

  private

  def set_category
    @category = Tag.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :description)
  end
end
