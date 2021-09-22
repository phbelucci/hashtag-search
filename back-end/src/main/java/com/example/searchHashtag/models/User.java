package com.example.searchHashtag.models;import javax.persistence.*;import java.io.Serializable;import java.util.List;@Entity@Table(name = "TB_USERS")public class User implements Serializable {  @Id  @GeneratedValue(strategy = GenerationType.AUTO)  @Column(          name = "id",          updatable = false  )  private Long id;  @Column(          name = "email",          nullable = false,          columnDefinition = "TEXT",          unique = true  )  private String email;  @Column(          name = "author",          nullable = true,          columnDefinition = "TEXT",          unique = true  )  private String author;  @ManyToMany  @JoinTable(          name = "TB_USER_HASHTAG",          joinColumns = @JoinColumn(name = "user_id"),          inverseJoinColumns = @JoinColumn(name = "hashtag_id")  )  private List<Hashtag> hashtags;  public List<Hashtag> getHashtags() {    return hashtags;  }  public void setHashtags(List<Hashtag> hashtags) {    this.hashtags = hashtags;  }  public User(String email, String author) {    this.email = email;    this.author = author;  }  public User() {  }  public Long getId() {    return id;  }  public void setId(Long id) {    this.id = id;  }  public String getEmail() {    return email;  }  public void setEmail(String email) {    this.email = email;  }  public String getAuthor() {    return author;  }  public void setAuthor(String author) {    this.author = author;  }  @Override  public String toString() {    return "User{" +            "id=" + id +            ", email='" + email + '\'' +            ", author='" + author + '\'' +            '}';  }}