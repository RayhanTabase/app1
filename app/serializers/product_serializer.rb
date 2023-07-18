class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :description, :quantity, :price, :image

  def image
    if object.image.attached?
      # rails_blob_path(object.image , only_path: true) if object.image.attached?
      # url_for(object.image)
      rails_blob_url(object.image)
    end
  end
end
