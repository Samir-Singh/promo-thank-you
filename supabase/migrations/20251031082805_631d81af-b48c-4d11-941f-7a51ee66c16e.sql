-- Initial database setup
-- This migration initializes the database and triggers types generation

-- Create a simple health check function
CREATE OR REPLACE FUNCTION public.health_check()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT true;
$$;

COMMENT ON FUNCTION public.health_check() IS 'Simple health check function for database connectivity';