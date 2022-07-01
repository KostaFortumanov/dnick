create table certifications
(
    id                 bigserial primary key,
    title              text    not null,
    time_limit_seconds integer not null
);

create table app_users
(
    id               bigserial primary key,
    username         text not null,
    first_name       text not null,
    last_name        text not null,
    email            text not null,
    password         text not null,
    is_enabled       boolean default false,
    certification_id bigint,
    time_started     timestamp,
    constraint fk_app_users_certification_id foreign key (certification_id) references certifications (id)
);

create table problems
(
    id                   bigserial primary key,
    problem_description  text,
    function_description text,
    returns              text,
    input_format         text,
    sample_input         text,
    sample_output        text,
    explanation          text,
    starter_code         text
);

create table comments
(
    id            bigserial primary key,
    from_user     text      not null,
    comment_date  timestamp not null,
    content       text      not null,
    likes         integer   not null,
    discussion_id bigint,
    user_id       bigint
);

create table comments_replies
(
    comment_id bigint,
    replies_id bigint,
    constraint fk_comments_replies_comment_id foreign key (comment_id) references comments (id) on delete cascade,
    constraint fk_comments_replies_reply_id foreign key (replies_id) references comments (id) on delete cascade
);

create table app_user_liked_comments
(
    app_user_id    bigint,
    liked_comments bigint,
    constraint fk_app_user_liked_comments_app_user_id foreign key (app_user_id) references app_users (id)
);

create table app_user_disliked_comments
(
    app_user_id       bigint,
    disliked_comments bigint,
    constraint fk_app_user_disliked_comments_app_user_id foreign key (app_user_id) references app_users (id)
);

create table app_user_finished_problems
(
    app_user_id       bigint,
    finished_problems bigint,
    constraint fk_app_user_finished_problems_app_user_id foreign key (app_user_id) references app_users (id)
);

create table app_user_finished_certificates
(
    app_user_id           bigint,
    finished_certificates bigint,
    constraint fk_app_user_finished_certificates_app_user_id foreign key (app_user_id) references app_users (id)
);

create table test_cases
(
    id         bigserial primary key,
    input      text,
    expected   text not null,
    problem_id bigint,
    constraint fk_test_cases_problem_id foreign key (problem_id) references problems (id)
);

create table home_items
(
    id    bigserial primary key,
    type  text    not null,
    title text    not null,
    link  text    not null,
    part  integer not null
);

create table topics
(
    id      bigserial primary key,
    content text not null
);

create table certifications_problems
(
    certification_id bigint,
    problems_id      bigint,
    constraint fk_certifications_problems_certification_id foreign key (certification_id) references certifications (id),
    constraint fk_certifications_problems_problems_id foreign key (problems_id) references problems (id)
);

create table download_links
(
    token            text primary key,
    user_id          bigint,
    certification_id bigint,
    constraint fk_download_links_user_id foreign key (user_id) references app_users (id),
    constraint fk_download_links_certification_id foreign key (certification_id) references certifications (id)
);
