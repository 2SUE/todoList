package com.list.todoserver.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// 인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입>을 상속하면 기본적인 CRUD 메소드가 자동으로 생성
// Entity 클래스와 기본 Entity Repository는 함께 위치해야함
public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findByDeleteAt(Boolean deleteAt);
}
