# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170620040455) do

  create_table "digimons", force: :cascade do |t|
    t.string   "species"
    t.string   "stage"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "eggs", force: :cascade do |t|
    t.string   "species"
    t.string   "stage"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "evolutions", force: :cascade do |t|
    t.integer  "digimon_id"
    t.string   "species"
    t.string   "evolve_to"
    t.integer  "priority"
    t.integer  "love",          default: 0
    t.integer  "strength",      default: 0
    t.integer  "energy",        default: 0
    t.integer  "health",        default: 0
    t.integer  "hunger",        default: 0
    t.integer  "hygiene",       default: 0
    t.string   "love_type",     default: ">"
    t.string   "strength_type", default: ">"
    t.string   "energy_type",   default: ">"
    t.string   "health_type",   default: ">"
    t.string   "hunger_type",   default: ">"
    t.string   "hygiene_type",  default: ">"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["digimon_id"], name: "index_evolutions_on_digimon_id"
  end

  create_table "homes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
