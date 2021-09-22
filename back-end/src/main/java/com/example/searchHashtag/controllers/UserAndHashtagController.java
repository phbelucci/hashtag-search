package com.example.searchHashtag.controllers;import com.example.searchHashtag.dto.CreateHashtagRequest;import com.example.searchHashtag.dto.CreateUserAndHashtagRequest;import com.example.searchHashtag.models.Hashtag;import com.example.searchHashtag.models.UserHashtag;import com.example.searchHashtag.services.HashtagService;import com.example.searchHashtag.services.UserAndHashtagService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.web.bind.annotation.GetMapping;import org.springframework.web.bind.annotation.PostMapping;import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RestController;@RestControllerpublic class UserAndHashtagController {  @Autowired  UserAndHashtagService userAndHashtagService;  @PostMapping("/user-hashtag")  public UserHashtag saveHashtag(    @RequestBody CreateUserAndHashtagRequest createUserAndHashtagRequest  ){    return userAndHashtagService.saveUserAndHashtag(createUserAndHashtagRequest);  }}