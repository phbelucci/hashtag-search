package com.example.searchHashtag.models;import javax.persistence.*;import java.io.Serializable;import java.util.List;@Entity@Table(name = "TB_HASHTAGS")public class Hashtag implements Serializable {    @Id    @GeneratedValue(strategy = GenerationType.AUTO)    private Long id;    public Hashtag(String hashtag) {        this.hashtag = hashtag;    }    @Column(            name = "hashtag",            nullable = false,            columnDefinition = "TEXT",            unique = true    )    private String hashtag;    @ManyToMany(mappedBy = "hashtags")    private List<User> users;    public Hashtag() {    }    public List<User> getUsers() {        return users;    }    public void setUsers(List<User> users) {        this.users = users;    }    public Long getId() {        return id;    }    public void setId(Long id) {        this.id = id;    }    public String getHashtag() {        return hashtag;    }    public void setHashtag(String hashtag) {        this.hashtag = hashtag;    }}