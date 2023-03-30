INSERT INTO public.users (display_name, handle, email, cognito_user_id)
VALUES
  ('erica x', 'ecollier871@outlook.com', 'e_coco' 'MOCK');
  

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'e_coco' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )