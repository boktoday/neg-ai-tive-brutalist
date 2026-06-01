/*
  # Create Neg-AI-tive Database Tables

  1. New Tables
    - `sob_stories`
      - `id` (uuid, primary key) - Unique identifier for each story
      - `name` (text) - Name of the person submitting (can be fake/satirical)
      - `job_title` (text) - Job title or profession
      - `story` (text) - The sob story content
      - `created_at` (timestamptz) - Timestamp of submission
      - `approved` (boolean) - Moderation flag for displaying stories
      
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique) - Email address
      - `created_at` (timestamptz) - Timestamp of subscription
      - `active` (boolean) - Subscription status

  2. Security
    - Enable RLS on both tables
    - Allow public INSERT access for submissions (anonymous users can submit)
    - Allow public SELECT access for approved stories only
    - Restrict UPDATE/DELETE to service role only

  3. Indexes
    - Add index on `approved` column for faster filtering
    - Add index on `email` for quick lookups
*/

-- Create sob_stories table
CREATE TABLE IF NOT EXISTS sob_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  job_title text NOT NULL,
  story text NOT NULL,
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE sob_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for sob_stories
CREATE POLICY "Anyone can submit a sob story"
  ON sob_stories
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved stories"
  ON sob_stories
  FOR SELECT
  TO anon, authenticated
  USING (approved = true);

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_sob_stories_approved ON sob_stories(approved);
CREATE INDEX IF NOT EXISTS idx_sob_stories_created_at ON sob_stories(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);