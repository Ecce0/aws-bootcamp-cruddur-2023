-- this file was manually created
INSERT INTO public.users (display_name, email, handle, cognito_user_id)
VALUES
  ('Erica X', 'ecollier871@outlook.com', 'e_coco' ,'MOCK'),
  ('Erin Beddle', 'erica.cloudbootcamp@gmail.com', 'erch_nemesis' ,'MOCK'),
  ('Patti LaBelle', 'now.pattee@gmail.com', 'if_only_u_knew' ,'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'e_coco' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )