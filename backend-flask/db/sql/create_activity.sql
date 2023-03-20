INSERT_INTO(
    user_uuid,
    message,
    expires_at
)
VALUES (
 (SELECT uuid
    FROM public.users
    WHERE usershandle = %(handle)s
    LIMIT 1
 ),
 %(message)s,
 %(expires_at)s
) RETURNING uuid;