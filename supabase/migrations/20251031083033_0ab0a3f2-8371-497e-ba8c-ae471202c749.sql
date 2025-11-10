-- Create a simple settings table to initialize the schema
CREATE TABLE IF NOT EXISTS public.app_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read settings (you can modify this later)
CREATE POLICY "Allow public read access to settings"
  ON public.app_settings
  FOR SELECT
  USING (true);

-- Fix the function search path warning from previous migration
DROP FUNCTION IF EXISTS public.health_check();

CREATE OR REPLACE FUNCTION public.health_check()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT true;
$$;

COMMENT ON FUNCTION public.health_check() IS 'Simple health check function for database connectivity';