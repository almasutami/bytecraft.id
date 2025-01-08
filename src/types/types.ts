export interface Address {
  id: number;
  events?: Event[];
  address_line: string;
  sub_district: string;
  district: string;
  city: string;
  province: string;
  zip_code: string;
  latitude?: string;
  longitude?: string;
}

export interface BankAccount {
  id: number;
  events?: Event[];
  bank_name: string;
  account_no: number;
}

export interface ProductPricing {
  id: number;
  events?: Event[];
  upgrade_to_m?: number;
  upgrade_to_l?: number;
  upgrade_to_xl?: number;
  upgrade_to_xxl?: number;
  upgrade_to_xxxl?: number;
  add_sablon_a3?: number;
  add_sablon_a3_multicolor?: number;
  add_sablon_a4?: number;
  add_sablon_a4_multicolor?: number;
  add_sablon_a5?: number;
  add_sablon_a5_multicolor?: number;
  add_sablon_a6?: number;
  add_sablon_a6_multicolor?: number;
  add_sablon_a7?: number;
  add_sablon_a7_multicolor?: number;
}

export interface User {
  id: number;
  events?: Event[];
  name: string;
  username: string;
  email: string;
  password: string;
  phone_no?: string;
  ktp_no?: number;
  ktp_image_url?: string;
  date_of_birth?: string;
  role: "admin" | "dropshipper";
  profile_image_url?: string;
  user_address?: Address[];
}

export interface Membership {
  id: number;
  events?: Event[];
  date_start: string;
  date_end: string;
  status: "active" | "inactive" | "on_review" | "waiting_payment";
  user: User;
  invoice: Invoice;
}

export interface Payment {
  id: number;
  events?: Event[];
  payment_confirmed_date: string;
  payment_proof_image_url: string;
  status: "confirmed" | "on_review";
  membership?: Membership;
  order?: Order;
  mentoring_class_member?: MentoringClassMember;
  invoice?: Invoice;
  receiving_bank_account: BankAccount;
  amount: number;
  type: "membership" | "invoice_order";
}

export interface Invoice {
  id: number;
  events?: Event[];
  user: User;
  order?: Order;
  membership?: Membership;
  mentoring_class_member?: MentoringClassMember;
  invoice_items: InvoiceItem[];
  total_amount: number;
  payment: Payment;
}

export interface InvoiceItem {
  id: number;
  events?: Event[];
  invoice: Invoice;
  product: Product;
  quantity: number;
  product_specification: ProductSpecification;
  amount: number;
}

export interface Product {
  id: number;
  events?: Event[];
  name: string;
  weight: number;
  dimension: Dimension;
  price: ProductPricing;
  category: Category;
  is_customizable: boolean;
  description: string;
  product_image_urls: string[];
  sizechart_image_url: string;
  base_price: number;
}

export interface Dimension {
  id: number;
  events?: Event[];
  width: number;
  length: number;
  height: number;
}

export interface ProductSpecification {
  id: number;
  events?: Event[];
  color: string;
  size: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  sablon_depan?: Sablon;
  sablon_belakang?: Sablon;
  sablon_kiri?: Sablon;
  sablon_kanan?: Sablon;
}

export interface Sablon {
  id: number;
  events?: Event[];
  size: "A3" | "A4" | "A5" | "A6" | "A7";
  is_multicolor: boolean;
  sablon_image_url?: string;
}

export interface Category {
  id: number;
  events?: Event[];
  name: string;
  icon_image_url: string;
}

export interface Event {
  event_datetime: string;
  event_type: "create" | "update" | "delete";
  object_before?:
    | Address
    | BankAccount
    | ProductPricing
    | User
    | Membership
    | Payment
    | Invoice
    | InvoiceItem
    | Product
    | Dimension
    | ProductSpecification
    | Sablon
    | Category
    | Cart
    | CartItem
    | Order
    | OrderItem
    | Blog
    | MentoringClass
    | MentoringClassMember
    | Banner
    | CompanySettings;
  object_after?:
    | Address
    | BankAccount
    | ProductPricing
    | User
    | Membership
    | Payment
    | Invoice
    | InvoiceItem
    | Product
    | Dimension
    | ProductSpecification
    | Sablon
    | Category
    | Cart
    | CartItem
    | Order
    | OrderItem
    | Blog
    | MentoringClass
    | MentoringClassMember
    | Banner
    | CompanySettings;
  user: User;
}

export interface Cart {
  id: number;
  events?: Event[];
  user: User;
  cart_items: CartItem[];
  amount: number;
}

export interface CartItem {
  id: number;
  events?: Event[];
  cart: Cart;
  product: Product;
  quantity: number;
  product_specification: ProductSpecification;
  price: number;
}

export interface Order {
  id: number;
  events?: Event[];
  user: User;
  order_items: OrderItem[];
  status:
    | "waiting_payment"
    | "payment_denied"
    | "packing"
    | "on_delivery"
    | "delivered"
    | "received"
    | "non_compliant";
  invoice: Invoice;
  dropshipper_address: Address;
  shipment_address: Address;
  warehouse_address: Address;
  total_amount: number;
}

export interface OrderItem {
  id: number;
  events?: Event[];
  order: Order;
  product: Product;
  quantity: number;
  product_specification: ProductSpecification;
  amount: number;
}

export interface Blog {
  id: number;
  events?: Event[];
  title: string;
  author_name: string;
  blog_thumbnail_image_url: string;
  content: string;
  tag: string[];
}

export interface MentoringClass {
  id: number;
  events?: Event[];
  title: string;
  description: string;
  url_class?: string;
  is_free: boolean;
  price?: number;
  mentoring_thumbnail_image_url?: string;
  type: "video" | "whatsapp" | "telegram";
  member?: MentoringClassMember[];
}

export interface MentoringClassMember {
  id: number;
  events?: Event[];
  mentoring_class: MentoringClass;
  user: User;
  status: "paid" | "on_review" | "waiting_payment";
  payment?: Payment;
  invoice?: Invoice;
}

export interface Banner {
  id: number;
  events?: Event[];
  title: string;
  banner_image_url: string;
  url_redirect: string;
  order?: number;
}

export interface CompanySettings {
  id: number;
  events?: Event[];
  emails: string[];
  phones: string[];
  warehouse_address: Address;
  company_address: Address;
  bank_account: BankAccount;
  whatsapp_no: string;
  global_product_pricing: ProductPricing;
}

export interface GeneralSettingsProps {
  admin: User;
  company: CompanySettings;
}
