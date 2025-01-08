import {
  Address,
  BankAccount,
  ProductPricing,
  User,
  Membership,
  Payment,
  Invoice,
  InvoiceItem,
  Product,
  Dimension,
  ProductSpecification,
  Sablon,
  Category,
  Event,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Blog,
  MentoringClass,
  MentoringClassMember,
  Banner,
  CompanySettings,
} from "../types/types";

const dummyEvent: Event = {
  event_datetime: "2023-01-01T00:00:00Z",
  event_type: "create",
  user: {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password123",
    role: "admin",
  },
};

const dummyAddress: Address = {
  id: 1,
  events: [dummyEvent],
  address_line: "123 Main St",
  sub_district: "Rancabolang",
  district: "Gedebage",
  city: "Kota Bandung",
  province: "Jawa Barat",
  zip_code: "12345",
  latitude: "12.345678",
  longitude: "98.765432",
};

const dummyBankAccount: BankAccount = {
  id: 1,
  events: [dummyEvent],
  bank_name: "Bank BCA",
  account_no: 1234567890,
};

const dummyProductPricing: ProductPricing = {
  id: 1,
  events: [dummyEvent],
  upgrade_to_m: 1000,
  upgrade_to_l: 2000,
  upgrade_to_xl: 3000,
  upgrade_to_xxl: 4000,
  upgrade_to_xxxl: 5000,
  add_sablon_a3: 600,
  add_sablon_a3_multicolor: 700,
  add_sablon_a4: 800,
  add_sablon_a4_multicolor: 900,
  add_sablon_a5: 1000,
  add_sablon_a5_multicolor: 1100,
  add_sablon_a6: 1200,
  add_sablon_a6_multicolor: 1300,
  add_sablon_a7: 1400,
  add_sablon_a7_multicolor: 1500,
};

const dummyUser: User = {
  id: 1,
  events: [dummyEvent],
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password123",
  phone_no: "1234567890",
  ktp_no: 1234567890123456,
  ktp_image_url: "http://example.com/ktp.jpg",
  date_of_birth: "1990-01-01",
  role: "dropshipper",
  profile_image_url: "http://example.com/profile.jpg",
  user_address: [dummyAddress],
};

const dummyAdmin: User = {
  id: 1,
  events: [dummyEvent],
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password123",
  phone_no: "1234567890",
  ktp_no: 1234567890123456,
  ktp_image_url: "http://example.com/ktp.jpg",
  date_of_birth: "1990-01-01",
  role: "admin",
  profile_image_url:
    "https://wallpapers-clan.com/wp-content/uploads/2022/06/one-piece-monkey-d-luffy-pfp-9.jpg",
  user_address: [dummyAddress],
};

const dummyMembership: Membership = {
  id: 1,
  events: [dummyEvent],
  date_start: "2023-01-01",
  date_end: "2023-12-31",
  status: "active",
  user: dummyUser,
  invoice: {
    id: 1,
    events: [dummyEvent],
    user: dummyUser,
    invoice_items: [],
    total_amount: 1000,
    payment: {
      id: 1,
      events: [dummyEvent],
      payment_confirmed_date: "2023-01-01",
      payment_proof_image_url: "http://example.com/payment.jpg",
      status: "confirmed",
      receiving_bank_account: dummyBankAccount,
      amount: 1000,
      type: "membership",
    },
  },
};

const dummyPayment: Payment = {
  id: 1,
  events: [dummyEvent],
  payment_confirmed_date: "2023-01-01",
  payment_proof_image_url: "http://example.com/payment.jpg",
  status: "confirmed",
  membership: dummyMembership,
  receiving_bank_account: dummyBankAccount,
  amount: 1000,
  type: "membership",
};

const dummyInvoice: Invoice = {
  id: 1,
  events: [dummyEvent],
  user: dummyUser,
  invoice_items: [],
  total_amount: 1000,
  payment: dummyPayment,
};

const dummyInvoiceItem: InvoiceItem = {
  id: 1,
  events: [dummyEvent],
  invoice: dummyInvoice,
  product: {
    id: 1,
    events: [dummyEvent],
    name: "Product Name",
    weight: 1.0,
    dimension: {
      id: 1,
      events: [dummyEvent],
      width: 10,
      length: 20,
      height: 30,
    },
    price: dummyProductPricing,
    category: {
      id: 1,
      events: [dummyEvent],
      name: "Category Name",
      icon_image_url: "http://example.com/icon.jpg",
    },
    is_customizable: true,
    description: "Product Description",
    product_image_urls: ["http://example.com/product1.jpg"],
    sizechart_image_url: "http://example.com/sizechart.jpg",
    base_price: 1000,
  },
  quantity: 1,
  product_specification: {
    id: 1,
    events: [dummyEvent],
    color: "Red",
    size: "m",
  },
  amount: 1000,
};

const dummyProduct: Product = {
  id: 1,
  events: [dummyEvent],
  name: "Product Name",
  weight: 1.0,
  dimension: {
    id: 1,
    events: [dummyEvent],
    width: 10,
    length: 20,
    height: 30,
  },
  price: dummyProductPricing,
  category: {
    id: 1,
    events: [dummyEvent],
    name: "Category Name",
    icon_image_url: "http://example.com/icon.jpg",
  },
  is_customizable: true,
  description: "Product Description",
  product_image_urls: ["http://example.com/product1.jpg"],
  sizechart_image_url: "http://example.com/sizechart.jpg",
  base_price: 1000,
};

const dummyDimension: Dimension = {
  id: 1,
  events: [dummyEvent],
  width: 10,
  length: 20,
  height: 30,
};

const dummyProductSpecification: ProductSpecification = {
  id: 1,
  events: [dummyEvent],
  color: "Red",
  size: "m",
};

const dummySablon: Sablon = {
  id: 1,
  events: [dummyEvent],
  size: "A3",
  is_multicolor: true,
};

const dummyCategory: Category = {
  id: 1,
  events: [dummyEvent],
  name: "Category Name",
  icon_image_url: "http://example.com/icon.jpg",
};

const dummyCart: Cart = {
  id: 1,
  events: [dummyEvent],
  user: dummyUser,
  cart_items: [],
  amount: 1000,
};

const dummyCartItem: CartItem = {
  id: 1,
  events: [dummyEvent],
  cart: dummyCart,
  product: dummyProduct,
  quantity: 1,
  product_specification: dummyProductSpecification,
  price: 1000,
};

const dummyOrder: Order = {
  id: 1,
  events: [dummyEvent],
  user: dummyUser,
  order_items: [],
  status: "waiting_payment",
  invoice: dummyInvoice,
  dropshipper_address: dummyAddress,
  shipment_address: dummyAddress,
  warehouse_address: dummyAddress,
  total_amount: 1000,
};

const dummyOrderItem: OrderItem = {
  id: 1,
  events: [dummyEvent],
  order: dummyOrder,
  product: dummyProduct,
  quantity: 1,
  product_specification: dummyProductSpecification,
  amount: 1000,
};

const dummyBlog: Blog = {
  id: 1,
  events: [dummyEvent],
  title: "Blog Title",
  author_name: "Author Name",
  blog_thumbnail_image_url: "http://example.com/blog.jpg",
  content: "Blog Content",
  tag: ["tag1", "tag2"],
};

const dummyMentoringClass: MentoringClass = {
  id: 1,
  events: [dummyEvent],
  title: "Mentoring Class Title",
  description: "Mentoring Class Description",
  is_free: true,
  type: "video",
};

const dummyMentoringClassMember: MentoringClassMember = {
  id: 1,
  events: [dummyEvent],
  mentoring_class: dummyMentoringClass,
  user: dummyUser,
  status: "paid",
};

const dummyBanner: Banner = {
  id: 1,
  events: [dummyEvent],
  title: "Banner Title",
  banner_image_url: "http://example.com/banner.jpg",
  url_redirect: "http://example.com",
};

const dummyCompanySettings: CompanySettings = {
  id: 1,
  events: [dummyEvent],
  emails: ["email@example.com", "email2@example.com"],
  phones: ["1234567890", "03820348239084"],
  warehouse_address: dummyAddress,
  company_address: dummyAddress,
  bank_account: dummyBankAccount,
  whatsapp_no: "082211611294",
  global_product_pricing: dummyProductPricing,
};

export {
  dummyEvent,
  dummyAddress,
  dummyBankAccount,
  dummyProductPricing,
  dummyUser,
  dummyAdmin,
  dummyMembership,
  dummyPayment,
  dummyInvoice,
  dummyInvoiceItem,
  dummyProduct,
  dummyDimension,
  dummyProductSpecification,
  dummySablon,
  dummyCategory,
  dummyCart,
  dummyCartItem,
  dummyOrder,
  dummyOrderItem,
  dummyBlog,
  dummyMentoringClass,
  dummyMentoringClassMember,
  dummyBanner,
  dummyCompanySettings,
};
